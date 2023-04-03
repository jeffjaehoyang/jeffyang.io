import { ReactNode } from 'react';

import Bio from '@/components/Bio';
import PageTitle from '@/components/PageTitle';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import { BlogSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { CoreContent } from '@/lib/utils/contentlayer';
import formatDate from '@/lib/utils/formatDate';

import type { BlogPost } from 'contentlayer/generated';
interface Props {
  content: CoreContent<BlogPost>;
  children: ReactNode;
  viewCount: string;
  next?: { slug: string; title: string };
  prev?: { slug: string; title: string };
}

export default function BlogPostLayout({ content, viewCount, next, prev, children }: Props) {
  const { slug, date, title, readingTime } = content;

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
              <div className="prose max-w-none pb-8 pt-10 dark:prose-dark">{children}</div>
            </div>
            <Bio />
          </div>
        </div>
      </article>
    </>
  );
}
