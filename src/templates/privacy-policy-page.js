import React from "react"
import { RiShieldUserFill } from "react-icons/ri"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query PrivacyPolicyQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const privacyPolicyPage = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title },
    },
  } = data
  return (
    <Layout>
      <SEO />
      <div className="home-banner d-flex">
        <h1>
          <RiShieldUserFill /> {title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default privacyPolicyPage
