import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const BlogPostItem = ({ post, thumbnailUri }) => {
  console.log(thumbnailUri);
  const imageQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "adj_mat.png" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <article className="blog-post-item">
      <Link to={post.frontmatter.path}>
        {!!post.frontmatter.thumbnail && (
          <img
            // fixed={data.image.childImageSharp.fixed}
            // alt={post.frontmatter.title + '- Featured Shot'}
            src={post.frontmatter.thumbnail}
            alt={post.frontmatter.title + '- Featured Shot'}
          />
          // <Image
          //   fixed={imageQuery.file.childImageSharp.fixed}
          //   alt="headshot"
          // />
        )}
      </Link>
      <header>
        <h2 className="post-title">
          <Link to={post.frontmatter.path} className="post-link">
            {post.frontmatter.title}
          </Link>
        </h2>
        <div
          className={`post-category ${post.frontmatter.category
            .split(' ')
            .join('')
            .toLowerCase()}`}
        >
          {post.frontmatter.category}
        </div>
        <div className="post-meta">
          {post.frontmatter.date} • {post.fields.readingTime.text}
        </div>
      </header>
    </article>
  );
};
export default BlogPostItem;
