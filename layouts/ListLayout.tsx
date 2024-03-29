import { useState } from 'react';

import BlogPostCard from '@/components/BlogPostCard';
import { CoreContent } from '@/lib/utils/contentlayer';

import type { BlogPost } from 'contentlayer/generated';

interface Props {
  posts: CoreContent<BlogPost>[];
  title: string;
  initialDisplayPosts?: CoreContent<BlogPost>[];
}

export default function ListLayout({ posts, title, initialDisplayPosts = [] }: Props) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags.join(' ');
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;

  return (
    <>
      <div>
        <div className="mb-8">
          <div className="text-lg font-extrabold tracking-tight">{title}</div>
          {/* <div className="text-2xl font-extrabold">It's not an idea until you write it down.</div> */}
          {/* <div className="relative mt-3">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div> */}
        </div>
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((post, index) => {
            const { slug, draft, date, title, summary, tags, readingTime } = post;
            return (
              !draft && (
                <BlogPostCard
                  key={index}
                  slug={slug}
                  date={date}
                  title={title}
                  summary={summary}
                  tags={tags}
                  readingTime={readingTime.text}
                />
              )
            );
          })}
        </ul>
      </div>
    </>
  );
}
