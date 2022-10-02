import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { allCoreContent } from '@/lib/utils/contentlayer'
import { POSTS_PER_PAGE } from '../../blog'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import { sortedBlogPost } from '../../../lib/utils/contentlayer'

export const getStaticPaths = async () => {
  const totalPosts = allBlogs
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const {
    params: { page },
  } = context
  const posts = sortedBlogPost(allBlogs)
  const pageNumber = parseInt(page as string)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  return {
    props: {
      initialDisplayPosts: allCoreContent(initialDisplayPosts),
      posts: allCoreContent(posts),
    },
  }
}

export default function PostPage({
  posts,
  initialDisplayPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} title="All Posts" />
    </>
  )
}
