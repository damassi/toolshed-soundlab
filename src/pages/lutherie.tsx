import React from "react"
import Layout from "src/components/layout"
import { SEO } from "src/components/seo"
import { LutherieTemplate } from "src/templates/lutherie"
import { graphql } from "gatsby"

const LutheriePage = _props => {
  return (
    <Layout>
      <SEO title="Lutherie" />
      <LutherieTemplate />
    </Layout>
  )
}

export default LutheriePage

export const pageQuery = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/lutherie/" } }) {
      frontmatter {
        title
        templateKey
      }
    }
  }
`
