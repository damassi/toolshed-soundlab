import React from "react"
import Layout from "src/components/layout"
import { SEO } from "src/components/seo"
import { HomeTemplate } from "src/templates/home"
import { graphql } from "gatsby"

export default function IndexPage(props) {
  // console.log(props)

  return (
    <Layout>
      <SEO title="Home" />
      <HomeTemplate {...props} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: "/home/" } }) {
      # excerpt
      # html
      frontmatter {
        title
        templateKey
      }
    }
  }
`
