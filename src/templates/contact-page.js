import React from "react"
import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"
import Image from "gatsby-image"
import { MdPhoneAndroid, MdEmail, MdPinDrop, MdPerson } from "react-icons/md"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
        map {
          link
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        contact {
          name
          address
          phone
          email
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className="contact-page">
      <SEO
        title={frontmatter.title + " | " + site.siteMetadata.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />

      <div className="map">
        <a href={frontmatter.map.link} target="_blank" rel="noreferrer" className="mapImage">
          <Image fluid={frontmatter.map.image.childImageSharp.fluid} />
        </a>

        <div className="contactDetails">
          <p>
            <MdPerson /> {frontmatter.contact.name}
          </p>
          <p>
            <MdPinDrop /> {frontmatter.contact.address}
          </p>
          <p>
            <MdPhoneAndroid /> {frontmatter.contact.phone}
          </p>
          <p>
            <MdEmail /> {frontmatter.contact.email}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
