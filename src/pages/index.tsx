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
      <HomeTemplate {...props.data.markdownRemark} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/home/" } }) {
      frontmatter {
        title
        templateKey
      }
    }
  }
`
