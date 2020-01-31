import React from "react"
import Layout from "src/components/layout"
import { SEO } from "src/components/seo"
import { ClassesWorkshopsTemplate } from "src/templates/classes"
import { graphql } from "gatsby"

const ClassesWorkshopsPage = _props => {
  return (
    <Layout>
      <SEO title="Classes & Workshops" />
      <ClassesWorkshopsTemplate />
    </Layout>
  )
}

export default ClassesWorkshopsPage

export const pageQuery = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/classes/" } }) {
      frontmatter {
        title
        templateKey
      }
    }
  }
`
