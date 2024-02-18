// this will remain unchanged forever
export const prevUncountedViews = 8698;

// update these annually, beginning of the year (QQQ Price)
// https://finance.yahoo.com/quote/QQQ/history/
export const priceOneYearAgo = '405.84'; // Jan 2024
export const priceFiveYearsAgo = '150.99'; // Jan 2019
export const priceTenYearsAgo = '87.55'; // Jan 2014
export const priceTwentyYearsAgo = '36.66'; // Jan 2004

// update this const every time I get back from Korea
export const lastDayInKorea = new Date('7/06/2023');

export const getDaysSince = (start: Date): string => {
  const today = new Date();
  const difference = today.getTime() - start.getTime();
  const numDays = difference / (1000 * 3600 * 24);
  return Math.floor(numDays).toLocaleString();
};

export const calcPriceChange = (latestPrice: string, comparePrice: string): number => {
  const a = parseFloat(latestPrice);
  const b = parseFloat(comparePrice);
  const result = ((a - b) / b) * 100.0;
  return Math.ceil(result);
};
