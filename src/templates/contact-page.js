import React from "react"
import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"
import Image from "gatsby-image"

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

      <div className="form">
        <h1>{frontmatter.title}</h1>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <form
          className="contact-form"
          action="/thanks"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <p style={{ display: "none" }}>
            <input name="bot-field" />
          </p>
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Imię
              <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label>
              Telefon
              <input type="text" name="phoneNumber" required />
            </label>
          </p>
          <p>
            <label>
              Wiadomość<textarea name="message" required></textarea>
            </label>
          </p>
          <p className="text-align-right">
            <button className="button" type="submit">
              Wyślij wiadomość{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>
          </p>
        </form>
      </div>
      <div className="map">
        <a href={frontmatter.map.link} target="_blank" rel="noreferrer">
          <Image fluid={frontmatter.map.image.childImageSharp.fluid} />
        </a>
      </div>
    </Layout>
  )
}

export default Contact
