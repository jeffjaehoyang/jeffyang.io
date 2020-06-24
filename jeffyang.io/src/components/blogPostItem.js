import React from "react"
import { Link } from "gatsby"

const BlogPostItem = ({ post }) => (
  <article className="blog-post-item">
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className={`post-category ${post.frontmatter.category.split(' ').join('').toLowerCase()}`}>{post.frontmatter.category}</div>
      <div className="post-meta">{post.frontmatter.date} • {post.fields.readingTime.text}</div>
    </header>
  </article>
)
export default BlogPostItem
