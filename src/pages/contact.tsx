import React from "react"
import Layout from "src/components/layout"
import { SEO } from "src/components/seo"
import { ContactTemplate } from "src/templates/contact"
import { graphql } from "gatsby"

export default function ContactPage(props) {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactTemplate {...props.data.markdownRemark} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/contact/" } }) {
      frontmatter {
        title
        content
        templateKey
      }
    }
  }
`
