import siteMetadata from '@/data/siteMetadata';

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  };
  const now = new Date(date).toLocaleDateString(siteMetadata.locale, options);
  return now;
};

export default formatDate;
