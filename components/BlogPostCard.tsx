import Link from 'next/link'
import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import { Views } from 'lib/types'
import Tag from './Tag'
import formatDate from '@/lib/utils/formatDate'

export default function BlogPostCard({
  slug,
  title,
  summary,
  date,
  tags,
  readingTime,
}: {
  slug: string
  title: string
  summary: string
  date: string
  tags: Array<string>
  readingTime: string
}) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher)
  const views = data?.total

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full" style={{ WebkitTapHighlightColor: 'transparent' }}>
        <div className="mb-12 w-full">
          <div className="flex flex-col justify-between md:flex-row">
            <h3 className="text-xl font-bold tracking-tight">{title}</h3>
            <div className="w-32 text-left text-sm text-gray-500 md:mb-0 md:text-right">
              {`${views ? new Number(views).toLocaleString() : '–––'} views`}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex flex-wrap">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
            <span className="mr-2 flex flex-row items-center text-sm text-gray-500 dark:text-gray-400">
              <time className="mr-2" dateTime={date}>
                {formatDate(date)}
              </time>
              <div className="mr-2 text-sm text-gray-500 dark:text-gray-400">{` • `}</div>
              <span className="mr-2 text-sm text-gray-500 dark:text-gray-400">{readingTime}</span>
            </span>
          </div>
          <div className="prose max-w-none text-sm text-gray-500 dark:text-gray-400">{summary}</div>
        </div>
      </a>
    </Link>
  )
}
