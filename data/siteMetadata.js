const siteMetadata = {
  title: 'Jeff Yang',
  author: 'Jeff Yang',
  headerTitle: '', // used for logo
  description: 'Recording life, code, and passion.',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://www.jeffyang.io',
  siteRepo: 'https://github.com/jeffjaehoyang/jeffyang.io',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: '',
  github: 'https://github.com/jeffjaehoyang',
  twitter: '',
  facebook: '',
  youtube: '',
  linkedin: 'https://www.linkedin.com/in/jaeho-yang/',
  locale: 'en-US',
  analytics: {
    googleAnalyticsId: 'G-R7SJ84DNYT',
  },
  comment: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'dark_tritanopia',
      lang: 'en',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
