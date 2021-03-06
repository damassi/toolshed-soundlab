import React from "react"
import Layout from "src/components/layout"
import { SEO } from "src/components/seo"
import { GRMusicTemplate } from "src/templates/gr-music"
import { graphql } from "gatsby"

const GRMusicPage = props => {
  return (
    <Layout>
      <SEO title="George's Music" />
      <GRMusicTemplate {...props.data.markdownRemark} />
    </Layout>
  )
}

export default GRMusicPage

export const pageQuery = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/gr-music/" } }) {
      frontmatter {
        title
        content
      }
    }
  }
`
