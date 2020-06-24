import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { FaGithubAlt, FaCode, FaLink } from "react-icons/fa";

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
      <h2>Software Projects &darr;</h2>
      <h4>What betters ways to learn than to fiddle around with ideas yourself?</h4>
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
                <FaLink /> Link
              </a>
            </span>
          </div>
        </div>        
      </div>
      <div className="projects-wrapper">
        <div className="projects-item">
          <div className="projects-detail">
            <span>Sorting Algorithm Visualizer</span>
            <div>coursework</div>
            <div>development</div>
          </div>
          <div className="projects-description">
            <span>
              Built in an attempt to deepen my understanding of core sorting algorithms learned in class. 
              Hopefully, it will also be a useful tool for those who get a chance to interact with it. 
              Currently supports animation speed toggling, with future plans to support interactive code testing. 
              Built with React.
            </span>
          </div>
          <div className="projects-links">
            <span className="project-links-item">
              <a href="https://www.sublets.nu">
                <FaLink /> Link
              </a>
            </span>
            <span class="project-links-item">
              <a href="https://github.com/jeffjaehoyang/sorting-visualizer">
                <FaGithubAlt /> Repository
              </a>
            </span>
          </div>
        </div>        
      </div>
      <div className="projects-wrapper">
        <div className="projects-item">
          <div className="projects-detail">
            <span>Three Word Philosopher</span>
            <div>development</div>
          </div>
          <div className="projects-description">
            <span>
              A simple Tweet bot built using Beautiful Soup and Flask.
              It's called a "Three Word Philosopher" because it Tweets 
              randomly generated sentences of three words. 
              The bot speaks John Stuart Mill's Utilitarianism.
              Check out the bot out through the link below!
            </span>
          </div>
          <div className="projects-links">
            <span className="project-links-item mr-4">
              <a href="https://threewordthinker-api-heroku.herokuapp.com">
                <FaLink /> Link
              </a>
            </span>
            <span className="project-links-item mr-4">
              <a href="https://github.com/jeffjaehoyang/twitter_bot">
                <FaGithubAlt /> Repository
              </a>
            </span>
          </div>
        </div>        
      </div>
      <div className="projects-wrapper">
        <div className="projects-item">
          <div className="projects-detail">
            <span>Email to Local Machine</span>
            <div>scripting</div>
            <div>development</div>
          </div>
          <div className="projects-description">
            <span>
              Have you ever had to go through an entire directory of emails, and somehow 
              save its contents on your machine? Well, I did. After a couple of days, 
              I decided to try and make my life easier. I wrote a Python script 
              that extracts email contents to a file, and saves it to a designated directory on a local 
              machine.
            </span>
          </div>
          <div className="projects-links">
            <span className="project-results-item mr-4">
              <a href="https://github.com/jeffjaehoyang/email_scraper">
                <FaGithubAlt /> Repository
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