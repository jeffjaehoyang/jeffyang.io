import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader/>
      <h2 className="highlighted-text">Recent Posts &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
      <div className="news">
        <h2 className="highlighted-text">News &darr;</h2>
        <div className="news-content-wrapper">
          <div className="news-post">
            <div className="news-date">Jun 2020</div>-
            <span className="news-content">Starting software engineering internship @<a href="https://www.esri.com/en-us/home"><b>Esri</b></a>! 👨‍💻</span>
          </div>
          <div className="news-post">
            <div className="news-date">Apr 2020</div>-
            <span className="news-content">Deploying <a href="https://www.sublets.nu"><b>sublets.nu</b></a> into production! 🎉</span>
          </div>
          <div className="news-post">
            <div className="news-date">Feb 2020</div>-
            <span className="news-content">Attending <a href="https://treehacks-2020.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=discover"><b>TreeHacks 2020</b></a> @Stanford 🌴</span>
          </div>		
          <div className="news-post">
            <div className="news-date">Dec 2019</div>-
            <span className="news-content">Accepted an internship offer from <a href="https://www.esri.com/en-us/home"><b>Esri</b></a> for summer 2020 🌎</span>
          </div>	
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}, limit: 3) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
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
`
