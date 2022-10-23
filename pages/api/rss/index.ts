import { NextApiRequest, NextApiResponse } from 'next';

import feed from './feed.json';

const metadata = {
  title: 'jeffyang.io',
  description: 'jeffyang.io RSS feed',
  link: 'https://jeffyang.io',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const postItems = feed
      .map((page) => {
        const url = `https://jeffyang.io/blog/${page.filePath.replace('.mdx', '')}`;

        return `<item>
          <title>${page.data.title}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${page.data.date}</pubDate>
          ${page.data.summary && `<description>${page.data.summary}</description>`}
        </item>`;
      })
      .join('');

    // Add urlSet to entire sitemap string
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
      <title>${metadata.title}</title>
      <description>${metadata.description}</description>
      <link>${metadata.link}</link>
      <lastBuildDate>${feed[0].data.date}</lastBuildDate>
      ${postItems}
      </channel>
      </rss>`;

    // set response content header to xml
    res.setHeader('Content-Type', 'text/xml');
    return res.status(200).send(sitemap);
  } catch (e: unknown) {
    if (!(e instanceof Error)) {
      throw e;
    }

    return res.status(500).json({ error: e.message || '' });
  }
}
