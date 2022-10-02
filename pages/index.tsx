import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent, featuredBlogPost } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import newsData from '@/data/newsData'
import NewsCard from '@/components/NewsCard'
import FeaturedPostCard from '@/components/FeaturedPostCard'

const gradients = {
  '0': 'from-[#D8B4FE] to-[#818CF8]',
  '1': 'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]',
  '2': 'from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]',
}

export const getStaticProps = async () => {
  // TODO: move computation to get only the essential frontmatter to contentlayer.config
  const sortedPosts = sortedBlogPost(allBlogs)
  const featuredPosts = featuredBlogPost(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return { props: { posts, featuredPosts } }
}

export default function Home({ featuredPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="mb-16">
          <div className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-200">
            Software Engineer & Neovim Enthusiast
          </div>
          <div className="mt-2 mb-8 text-3xl font-bold tracking-tight text-primary-400">
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
        </div>

        <div className="mb-16">
          <div className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200">
            News Room
          </div>
          <div>
            {newsData
              .sort((a, b) => Date.parse(b.newsDate) - Date.parse(a.newsDate))
              .map((d) => {
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
                    newsDate={d.newsDate}
                    year={d.year}
                    published={d.published}
                    key={d.content}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}
