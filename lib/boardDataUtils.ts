// this will remain unchanged forever
export const prevUncountedViews = 8698

// update these annually, beginning of the year (QQQ Price)
export const priceOneYearAgo = '401.68' // Jan 2022
export const priceFiveYearsAgo = '119.54' // Jan 2017
export const priceTenYearsAgo = '56.9' // Jan 2012
export const priceTwentyYearsAgo = '40.11' // Jan 2002

// update this const every time I get back from Korea
export const lastDayInKorea = new Date('6/20/2022')

export const getDaysSince = (start: Date): string => {
  const today = new Date()
  const difference = today.getTime() - start.getTime()
  const numDays = difference / (1000 * 3600 * 24)
  return Math.floor(numDays).toLocaleString()
}

export const calcPriceChange = (latestPrice: string, comparePrice: string): number => {
  const a = parseFloat(latestPrice)
  const b = parseFloat(comparePrice)
  const result = ((a - b) / b) * 100.0
  return Math.ceil(result)
}
