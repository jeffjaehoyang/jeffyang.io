import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { CoreContent } from '@/lib/utils/contentlayer'
import { ReactNode } from 'react'
import type { Blog } from 'contentlayer/generated'
import Giscus from '@/components/comments/Giscus'

interface Props {
  content: CoreContent<Blog>
  children: ReactNode
  viewCount: string
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
}

export default function BlogPostLayout({ content, viewCount, next, prev, children }: Props) {
  const { slug, date, title, readingTime } = content

  return (
    <>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${slug}`} {...content} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="flex flex-row justify-center">
                <div className="mr-2 text-sm text-gray-500 dark:text-gray-400">{viewCount}</div>
                <div className="mr-2 text-sm text-gray-500 dark:text-gray-400">{` • `}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{readingTime.text}</div>
              </div>
            </div>
          </header>
          <div className="pb-8" style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>
            <Giscus />
            <div className="flex w-full flex-row items-center justify-between pt-12 text-sm text-base font-medium">
              {prev && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    &larr; prev
                  </Link>
                </div>
              )}
              {next && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/blog/${next.slug}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    next &rarr;
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
