# jeffyang.io

**Welcome to my personal home on the web.**

## Forked from
Tailwind Next.js Starter Blog Template ([repo link](https://github.com/timlrx/tailwind-nextjs-starter-blog))

## Inspired by
Lee Rob's Personal Blog ([repo link](https://github.com/leerob/leerob.io))

## Technologies used
* Framework: Next.js
* Styling: Tailwind CSS
* Database: PlanetScale
* ORM: Prisma
* Content SDK: Contentlayer
* Blog Post Comments: Giscus

## Running Locally

This application requires Node.js v16.13+.

```bash
git clone git@github.com:jeffjaehoyang/jeffyang.io.git
cd jeffyang.io
npm install
npm run dev
```

## How to add a new blog post
Add a new new-blog-post.mdx file under `/data/blog`. 'new-blog-post' will be the new slug. The document types are defined as follows via [contentlayer](https://www.contentlayer.dev/):
```typescript:contentlayer.config.ts
export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
    images: { type: 'list', of: { type: 'string' } },
    authors: { type: 'list', of: { type: 'string' } },
    layout: { type: 'string' },
    canonicalUrl: { type: 'string' },
  },
  computedFields,
}))

export const Authors = defineDocumentType(() => ({
  name: 'Authors',
  filePathPattern: 'authors/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    avatar: { type: 'string' },
    occupation: { type: 'string' },
    company: { type: 'string' },
    linkedin: { type: 'string' },
    github: { type: 'string' },
  },
}))
```

## How to add more to News Room
Add more to `/data/newsData.ts`.

## How to add more to Projects
Add more to `/data/projectsData.ts`
