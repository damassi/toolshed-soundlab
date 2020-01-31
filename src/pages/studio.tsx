import React from "react"
import Layout from "src/components/layout"
import { SEO } from "src/components/seo"
import { StudioTemplate } from "src/templates/studio"
import { graphql } from "gatsby"

const StudioPage = _props => {
  return (
    <Layout>
      <SEO title="Recording Studio" />
      <StudioTemplate />
    </Layout>
  )
}

export default StudioPage

export const pageQuery = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/studio/" } }) {
      frontmatter {
        title
        templateKey
      }
    }
  }
`
