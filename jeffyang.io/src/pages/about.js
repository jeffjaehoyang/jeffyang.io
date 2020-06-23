import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>About Me— {site.siteMetadata.title}</title>
        <meta name="description" content={"About page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="about-picture" style={{ backgroundImage: `url('/assets/about-me.jpeg')`, filter: 'brightness(0.7)', marginBottom: 0}}>
      </div>
      <div>
        <p style={{ fontSize: '2.5em', fontWeight: 600, color: '#1f364c', marginTop: '0.5em' }}>Hi there, I'm Jeff!</p>
        <p className="welcome-to-my-blog">Welcome to my blog! I created this blog for myself to <b>freely share ideas and document my progress as a software engineer.</b> I have benefited 
        from the community of programmer-bloggers out there who aren't shy to share their success and failure as programmers. I hope 
        to replicate that learning experience for others through sharing knowledge on this blog!</p>
        <hr></hr>
        <p style={{ fontSize: '1.5em', fontWeight: 600 }}>A little bit about myself 🧑‍💻</p>
        <div className="a-little-bit-about-myself">
          <div>I'm a <b>web enthusiast</b>, with a special interest in scalable software architecture</div>
          <div><b>Northwestern University</b> CS '21</div>
          <div>Software Engineering Intern <b>@Esri</b>, previously <b>@Knowru</b></div>
          <div>Born and Raised in <b>Seoul, South Korea</b></div>
          <div>Living in <b>Evanston, IL</b></div>
          <div>A Life-long <b>Liverpool FC</b> Fan</div>
        </div>
      </div>
      </div>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`