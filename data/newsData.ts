import { NewsDataGroup } from '@/lib/types';

const newsData: NewsDataGroup[] = [
  {
    year: 2023,
    data: [
      {
        category: 'news',
        content: 'My first promotion 🏅',
        explanation: 'After a year at Meta, I got my first promotion as a software engineer.',
        newsDate: 'Aug 2023',
        published: true,
      },
      {
        category: 'news',
        content: 'Ran my first half-marathon 🏃🏻‍♂️',
        explanation:
          'Ran my first ever half marathon (NYC Runs Brooklyn Half Marathon)! Started in Williamsburg, ran through DUMBO, and finished in Prospect Park.',
        newsDate: 'Apr 2023',
        published: true,
      },
    ],
    isVisible: true,
  },
  {
    year: 2022,
    data: [
      {
        category: 'news',
        content: 'Started full-time @Meta 🤞',
        explanation:
          'Opening a new chapter of my life as a professional! Building the backend & infrastructure for checkout experiences across Facebook & Instagram.',
        newsDate: 'Jun 2022',
        published: true,
      },
      {
        category: 'news',
        content: 'Graduated from Northwestern University 🎓',
        explanation:
          "After 7 years, I graduated with a degree in computer science. It's been a ride! Thank you Northwestern.",
        newsDate: 'Mar 2022',
        published: true,
      },
    ],
    isVisible: true,
  },
  {
    year: 2021,
    data: [
      {
        category: 'news',
        content: 'Wrapped up internship @Facebook and received a full-time return offer 🏆',
        explanation:
          "I learned a lot, and had the joy of working with some of the smartest engineers I've ever met. I was lucky enough to land a return offer to come back as a full-time engineer!",
        newsDate: 'Sep 2021',
        published: true,
      },
      {
        category: 'news',
        content: 'Summer Internship @Facebook! 👍',
        explanation:
          'An exciting summer working at Facebook (Business Messaging Lead Gen Ads Team).',
        newsDate: 'Jun 2021',
        published: true,
      },
      {
        category: 'news',
        content: 'Resuming Studies 🔙',
        explanation:
          'I am finally starting my senior year after taking two (fruitful) quarters off. I am excited to be back studying!',
        newsDate: 'Mar 2021',
        published: true,
      },
    ],
    isVisible: true,
  },
  {
    year: 2020,
    data: [
      {
        category: 'news',
        content: 'Internship offer from Facebook for summer 2021 🤩',
        explanation:
          'This internship offer really meant a lot to me. I landed my dream internship and I worked very hard for it! Very excited to learn from the best.',
        newsDate: 'Dec 2020',
        published: true,
      },
      {
        category: 'news',
        content: 'Winter Internship @Fumi! 🛍️',
        explanation: 'I worked for 4 months at a Series A e-commerce startup in Korea.',
        newsDate: 'Oct 2020',
        published: true,
      },
      {
        category: 'news',
        content: 'Taking time off from college ⏳',
        explanation:
          'I decided to take two quarters off due to COVID-19. Hope everything goes back to normal soon.',
        newsDate: 'Sep 2020',
        published: true,
      },
      {
        category: 'news',
        content: 'Summer internship @Esri! 👨‍💻',
        explanation:
          'It was my first professional experience in the US. I learned a lot working on the ArcGIS Dashboard team at Esri.',
        newsDate: 'Jun 2020',
        published: true,
      },
      {
        category: 'news',
        content: 'Attending TreeHacks 2020 @Stanford 🌴',
        explanation:
          'This was my first hackathon and TreeHacks truly did not disappoint! It was great to spend time with such an intelligent community of engineers. The California weather is always a plus!',
        newsDate: 'Feb 2020',
        published: true,
      },
    ],
    isVisible: false,
  },
  {
    year: 2019,
    data: [
      {
        category: 'news',
        content: 'Internship offer from Esri for summer 2020 🌎',
        explanation:
          'This was my first recruiting experience in the US. It was rough but I was fortunate enough to land an internship at Esri, a leading GIS software company based in Redlands, CA.',
        newsDate: 'Dec 2019',
        published: true,
      },
    ],
    isVisible: false,
  },
];

export default newsData;
