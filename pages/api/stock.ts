import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  runtime: 'experimental-edge',
}

const calcPriceChange = (latestPrice, comparePrice) => {
  latestPrice = parseFloat(latestPrice)
  comparePrice = parseFloat(comparePrice)
  const result = ((latestPrice - comparePrice) / comparePrice) * 100.0
  return Math.ceil(result)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.ALPHAVANTAGE_API_KEY
  const timeSeriesDaily = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=full&symbol=QQQ&apikey=${apiKey}`,
    {
      method: 'GET',
    }
  )
  const globalQuote = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=QQQ&apikey=${apiKey}`,
    { method: 'GET' }
  )
  const stockData = await timeSeriesDaily.json()
  const latestPriceData = await globalQuote.json()

  const latestPrice = latestPriceData['Global Quote']
    ? latestPriceData['Global Quote']['05. price']
    : null

  const oneYearAgo = '2022-01-03'
  const fiveYearsAgo = '2017-01-03'
  const tenYearsAgo = '2012-01-03'
  const twentyYearsAgo = '2002-01-02'

  console.log('stock data: ', stockData['Time Series (Daily)'])

  const priceOneYearAgo = stockData['Time Series (Daily)']
    ? stockData['Time Series (Daily)'][oneYearAgo]['4. close']
    : null
  const priceFiveYearsAgo = stockData['Time Series (Daily)']
    ? stockData['Time Series (Daily)'][fiveYearsAgo]['4. close']
    : null
  const priceTenYearsAgo = stockData['Time Series (Daily)']
    ? stockData['Time Series (Daily)'][tenYearsAgo]['4. close']
    : null
  const priceTwentyYearsAgo = stockData['Time Series (Daily)']
    ? stockData['Time Series (Daily)'][twentyYearsAgo]['4. close']
    : null

  const priceChangeYtd = calcPriceChange(latestPrice, priceOneYearAgo)
  const priceChangeFiveYears = calcPriceChange(latestPrice, priceFiveYearsAgo)
  const priceChangeTenYears = calcPriceChange(latestPrice, priceTenYearsAgo)
  const priceChangeTwentyYears = calcPriceChange(latestPrice, priceTwentyYearsAgo)

  return res.status(200).json({
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
