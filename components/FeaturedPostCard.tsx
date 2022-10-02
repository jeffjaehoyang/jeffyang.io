import fetcher from '@/lib/fetcher'
import { Views } from '@/lib/types'
import cn from 'classnames'
import Link from 'next/link'
import useSWR from 'swr'

export default function FeaturedPostCard({ title, slug, gradient, readingTime }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher)
  const views = data?.total

  return (
    <Link href={`/blog/${slug}`}>
      <a
        className={cn(
          'transform transition-all hover:scale-[1.01]',
          'w-full rounded-xl bg-gradient-to-r p-1 md:w-1/3',
          gradient
        )}
      >
        <div className="flex h-full flex-col justify-between rounded-lg bg-white p-4 dark:bg-gray-900">
          <div className="flex flex-col md:flex-row">
            <h4 className="mb-4 w-full text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100 sm:mb-10 md:text-lg">
              {title}
            </h4>
          </div>
          <div className="flex flex-row md:flex-col">
            <div className="mr-4 flex items-center text-gray-800 dark:text-gray-200 md:mr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span className="ml-2 align-baseline text-sm">
                {views ? new Number(views).toLocaleString() + ' views' : '––– views'}
              </span>
            </div>
            <div className="flex flex-row items-center text-gray-800 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-2 align-baseline text-sm">{readingTime}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
