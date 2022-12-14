import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Image from 'gatsby-image';

const AboutPage = ({ data: { site, file } }) => {
  return (
    <Layout>
      <Helmet>
        <title>About Me | {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={'About page of ' + site.siteMetadata.description}
        />
      </Helmet>
      <div className="two-grids -contact">
        {/* <div
          className="about-picture"
          style={{
            backgroundImage: `url('/assets/about-me.jpeg')`,
            marginBottom: 0,
          }}
        ></div> */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            className="about-picture"
            fixed={file.childImageSharp.fixed}
          />
        </div>
        <div>
          <p
            style={{
              fontSize: '2.5em',
              fontWeight: 600,
              color: '#1f364c',
              marginTop: '0.5em',
            }}
          >
            Hi there, I'm Jeff!
          </p>
          <p className="welcome-to-my-blog">
            Welcome to my blog! I created this blog for myself to{' '}
            <b>
              freely share ideas and document my progress as a
              software engineer.
            </b>{' '}
            I have benefited immensely from the generous and welcoming
            programming community who share their knowledge with
            others. I hope to replicate that learning experience for
            others through this blog!
          </p>
          <hr></hr>
          <p
            style={{
              fontSize: '1.5em',
              fontWeight: 600,
              marginBottom: 0,
            }}
          >
            A little bit about myself{' '}
            <span role="img" aria-label="computer boy emoji">
              ???????????
            </span>
          </p>
          <div className="a-little-bit-about-myself">
            <div>
              I'm a <b>web enthusiast</b>, with a special interest in{' '}
              <b>scalable software architecture</b>
            </div>
            <div>
              <b>Northwestern University</b> CS '21
            </div>
            <div>
              Software engineering intern{' '}
              <a href="https://www.esri.com/en-us/home">
                <b>@Esri</b>
              </a>
              , previously{' '}
              <a href="https://www.knowrulimited.com">
                <b>@Knowru</b>
              </a>
            </div>
            <div>
              Born and raised in <b>Seoul, South Korea</b>
            </div>
            <div>
              Living in <b>Evanston, IL</b>
            </div>
            <div>
              A life-long <b>Liverpool FC</b> fan
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default AboutPage;
export const pageQuery = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    file(relativePath: { eq: "about-me.jpeg" }) {
      childImageSharp {
        fixed(width: 250, quality: 100) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
