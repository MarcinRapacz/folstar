import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query PrivacyPolicyQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`

const privacyPolicyPage = ({ data }) => {
  const {
    markdownRemark: { html },
  } = data
  return (
    <Layout>
      <SEO />
      <div className="home-banner d-flex">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default privacyPolicyPage
