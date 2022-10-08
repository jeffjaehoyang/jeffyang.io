import { allBlogPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import FeaturedPostCard from '@/components/FeaturedPostCard';
import NewsCard from '@/components/NewsCard';
import { PageSEO } from '@/components/SEO';
import newsData from '@/data/newsData';
import siteMetadata from '@/data/siteMetadata';
import { allCoreContent, featuredBlogPost, sortedBlogPost } from '@/lib/utils/contentlayer';

const gradients = {
  '0': 'from-[#D8B4FE] to-[#818CF8]',
  '1': 'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]',
  '2': 'from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]',
}

export const getStaticProps = async () => {
  // TODO: move computation to get only the essential frontmatter to contentlayer.config
  const sortedPosts = sortedBlogPost(allBlogPosts)
  const featuredPosts = featuredBlogPost(allBlogPosts)
  const posts = allCoreContent(sortedPosts)

  return { props: { posts, featuredPosts } }
}

export default function Home({ featuredPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="mb-16">
          <div className="font-bold tracking-tight text-gray-900 text-md dark:text-gray-200">
            Software Engineer & Neovim Enthusiast
          </div>
          <div className="mt-2 mb-8 text-3xl font-bold tracking-tight">
            Hello, I'm Jeff <span className="waving-hand"> 👋</span>
          </div>
          <div>
            I'm a software engineer looking to make a positive impact on the world through code.
            This space looks to achieve even a fraction of that goal and learn from others in turn.
            Thank you for stopping by, and enjoy!
          </div>
        </div>

        <div className="mb-16">
          <div className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200">
            Featured Posts
          </div>

          <div className="flex flex-col gap-6 md:flex-row">
            {featuredPosts.map((frontMatter, index) => {
              const { slug, title, readingTime } = frontMatter
              return (
                <FeaturedPostCard
                  key={index}
                  title={title}
                  slug={slug}
                  gradient={gradients[index]}
                  readingTime={readingTime.text}
                />
              )
            })}
          </div>
          <Link href="/blog">
            <a className="flex items-center float-right mt-6 text-gray-600 transition-all rounded-lg hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
              See More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
          </Link>
        </div>

        <div className="mb-16">
          <div className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200">
            News Room
          </div>
          <div>
            {newsData
              .sort((a, b) => Date.parse(b.newsDate) - Date.parse(a.newsDate))
              .map((d, index) => {
                if (d.isSeparator) {
                  return (
                    <div key={d.year} className="mb-2 text-xl font-bold">
                      {d.year}
                    </div>
                  )
                }
                return (
                  <NewsCard
                    content={d.content}
                    explanation={d.explanation}
                    published={d.published}
                    key={index}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}
