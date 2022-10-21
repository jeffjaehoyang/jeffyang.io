import {
  calcPriceChange,
  priceFiveYearsAgo,
  priceOneYearAgo,
  priceTenYearsAgo,
  priceTwentyYearsAgo,
} from '@/lib/boardDataUtils'
import { NextApiRequest, NextApiResponse } from 'next'
import cache from 'memory-cache'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.ALPHAVANTAGE_API_KEY
  const endpoint = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=QQQ&apikey=${apiKey}`
  const globalQuote = cache.get(endpoint)
  if (globalQuote) {
    const latestPrice = globalQuote['Global Quote']
      ? globalQuote['Global Quote']['05. price']
      : null

    const priceData = calculatePriceData(latestPrice)

    return res.status(200).json(priceData)
  } else {
    const hours = 12
    const globalQuote = await fetch(endpoint, { method: 'GET' })
    const latestPriceData = await globalQuote.json()
    cache.put(endpoint, latestPriceData, hours * 1000 * 60 * 60)

    const latestPrice = latestPriceData['Global Quote']
      ? latestPriceData['Global Quote']['05. price']
      : null

    const priceData = calculatePriceData(latestPrice)

    return res.status(200).json(priceData)
  }

  // TODO:: figure out why below doesn't work
  // if (stockData['Time Series (Daily)']) {
  //   return new Response(
  //     JSON.stringify({
  //       ytd: priceChangeYtd,
  //       five: priceChangeFiveYears,
  //       ten: priceChangeTenYears,
  //       twenty: priceChangeTwentyYears,
  //     }),
  //     {
  //       status: 200,
  //       headers: {
  //         'content-type': 'application/json',
  //         'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
  //       },
  //     }
  //   )
  // }
}

const calculatePriceData = (
  latestPrice: string
): { latestPrice: string; ytd: number; five: number; ten: number; twenty: number } => {
  const priceChangeYtd = calcPriceChange(latestPrice, priceOneYearAgo)
  const priceChangeFiveYears = calcPriceChange(latestPrice, priceFiveYearsAgo)
  const priceChangeTenYears = calcPriceChange(latestPrice, priceTenYearsAgo)
  const priceChangeTwentyYears = calcPriceChange(latestPrice, priceTwentyYearsAgo)
  return {
    latestPrice: latestPrice,
    ytd: priceChangeYtd,
    five: priceChangeFiveYears,
    ten: priceChangeTenYears,
    twenty: priceChangeTwentyYears,
  }
}
