import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import BlogPostItem from '../components/blogPostItem';

const BlogPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <BlogPostItem key={edge.node.id} post={edge.node} />
    ));

  return (
    <Layout>
      <Helmet>
        <title>Blog | {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={site.siteMetadata.description}
        />
      </Helmet>
      <h2>Blog Posts &darr;</h2>
      <h4>
        Coding is great, but sometimes, writing about code can be even
        better.
      </h4>
      <div className="blog-wrapper">{Posts}</div>
    </Layout>
  );
};

export default BlogPage;
export const pageQuery = graphql`
  query blogPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            category
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;
