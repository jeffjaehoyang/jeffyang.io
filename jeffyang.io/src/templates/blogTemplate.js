import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Bio from '../components/bio';
import Commento from '../components/commento';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data; // data.markdownRemark holds your post data
  const { siteMetadata } = site;
  const { frontmatter, html, fields } = markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
        </title>
        <meta
          name="description"
          content={frontmatter.metaDescription}
        />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div
              className="post-thumbnail"
              style={{
                backgroundColor: '#001b32',
              }}
            >
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">
                {frontmatter.date} • {fields.readingTime.text}
              </div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
        <Link to="/blog" className="button -primary">
          See all posts
        </Link>
        <Bio />
        <Commento id={frontmatter.title} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
        category
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
