import {
  calcPriceChange,
  priceFiveYearsAgo,
  priceOneYearAgo,
  priceTenYearsAgo,
  priceTwentyYearsAgo,
} from '@/lib/boardDataUtils'
import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.ALPHAVANTAGE_API_KEY
  const globalQuote = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=QQQ&apikey=${apiKey}`,
    { method: 'GET' }
  )
  const latestPriceData = await globalQuote.json()

  const latestPrice = latestPriceData['Global Quote']
    ? latestPriceData['Global Quote']['05. price']
    : null

  const priceChangeYtd = calcPriceChange(latestPrice, priceOneYearAgo)
  const priceChangeFiveYears = calcPriceChange(latestPrice, priceFiveYearsAgo)
  const priceChangeTenYears = calcPriceChange(latestPrice, priceTenYearsAgo)
  const priceChangeTwentyYears = calcPriceChange(latestPrice, priceTwentyYearsAgo)

  return res.status(200).json({
    latestPrice: latestPrice,
    ytd: priceChangeYtd,
    five: priceChangeFiveYears,
    ten: priceChangeTenYears,
    twenty: priceChangeTwentyYears,
  })

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
