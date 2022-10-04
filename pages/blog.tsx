import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogPosts } from 'contentlayer/generated'

export const POSTS_PER_PAGE = 1000

export const getStaticProps = async () => {
  const posts = sortedBlogPost(allBlogPosts)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)

  return {
    props: {
      initialDisplayPosts: allCoreContent(initialDisplayPosts),
      posts: allCoreContent(posts),
    },
  }
}

export default function Blog({
  posts,
  initialDisplayPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} title="My Two Cents" />
    </>
  )
}
