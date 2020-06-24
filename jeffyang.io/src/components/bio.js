/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(relativePath: { eq: "jeffyang.png" }) {
        childImageSharp {
          fixed(width: 90, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '635px',
        marginTop: '5em',
        marginBottom: '1em',
        borderTop: '1px solid grey',
        borderBottom: '1px solid grey',
        padding: '1em',
        lineHeight: '1.6em'
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: '1em',
          minWidth: '90px',
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <div style={{ marginBottom: '1em' }}>Written by <strong>{author.name}</strong></div>
        {author.summary}
        {` `}
      </p>
    </div>
  )
}

export default Bio