import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ProjectsPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Projects — {site.siteMetadata.title}</title>
        <meta name="description" content={"Projects page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="projects-wrapper">
        <div className="projects-item">
          <div className="projects-detail">
            <span>Sublets.nu</span>
            <div>development</div>
          </div>
          <div className="projects-description">
            <span>
              Sublets.nu started out as a Northwestern-IEEE team project. 
              Our team identified a clear problem that we all agreed could and needed to be solved; 
              to enhance off-campus room searching experience for the Northwestern community. 
              Currently, the team moved off the Northwestern-IEEE boundary, 
              and has evolved into a separate team project. Sublets.nu focuses on streamlining the search process 
              for a sublet and sublessee tenfold. Sublets.nu provides the control and ability to 
              compare all available options, from costs to basic amenities to proximities to campus.
              (Source code is currently private)
            </span>
          </div>
          <div className="projects-links">
            <span className="project-results-item mr-4">
              <a href="https://www.sublets.nu">
                <i className="fal fa-link mr-2"></i>Link
              </a>
            </span>
          </div>
        </div>        
      </div>
    </Layout>
  )
}
export default ProjectsPage
export const pageQuery = graphql`
  query ProjectsPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`