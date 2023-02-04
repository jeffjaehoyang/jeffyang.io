// this will remain unchanged forever
export const prevUncountedViews = 8698;

// update these annually, beginning of the year (QQQ Price)
export const priceOneYearAgo = '264.48'; // Jan 2023
export const priceFiveYearsAgo = '154.37'; // Jan 2018
export const priceTenYearsAgo = '59.33'; // Jan 2013
export const priceTwentyYearsAgo = '20.97'; // Jan 2003

// update this const every time I get back from Korea
export const lastDayInKorea = new Date('6/20/2022');

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
