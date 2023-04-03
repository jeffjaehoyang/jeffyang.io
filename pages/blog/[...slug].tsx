import { allAuthors, allBlogPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import GiscusComments from '@/components/comments/GiscusComments';
import { MDXLayoutRenderer } from '@/components/MDXComponents';
import PageTitle from '@/components/PageTitle';
import useViewCounter from '@/lib/hooks/useViewCounter';
import { coreContent, sortedBlogPost } from '@/lib/utils/contentlayer';

const DEFAULT_LAYOUT = 'BlogPostLayout';

export async function getStaticPaths() {
  return {
    paths: allBlogPosts.map((p) => ({ params: { slug: p.slug.split('/') } })),
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const slug = (params.slug as string[]).join('/');
  const sortedPosts = sortedBlogPost(allBlogPosts);
  const postIndex = sortedPosts.findIndex((p) => p.slug === slug);
  // TODO: Refactor this extraction of coreContent
  const prevContent = sortedPosts[postIndex + 1] || null;
  const prev = prevContent ? coreContent(prevContent) : null;
  const nextContent = sortedPosts[postIndex - 1] || null;
  const next = nextContent ? coreContent(nextContent) : null;
  const post = sortedPosts.find((p) => p.slug === slug);
  const authorList = post.authors || ['default'];
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.name === author);
    return coreContent(authorResults);
  });

  return {
    props: {
      post,
      authorDetails,
      prev,
      next,
    },
  };
};

const Blog = ({
  post,
  authorDetails,
  prev,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const viewCount = useViewCounter(post.slug);

  return (
    <>
      {'draft' in post && post.draft !== true ? (
        <div>
          <MDXLayoutRenderer
            layout={DEFAULT_LAYOUT}
            toc={post.toc}
            content={post}
            authorDetails={authorDetails}
            prev={prev}
            next={next}
            viewCount={viewCount}
          />
          <GiscusComments />
          <div className="flex w-full flex-row items-center justify-between pt-12 text-base text-sm font-medium">
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
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  );
};

export default Blog;
