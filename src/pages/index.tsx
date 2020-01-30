import React from "react"
import Layout from "src/components/layout"
import { SEO } from "src/components/seo"
import { HomeTemplate } from "src/templates/HomeTemplate"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HomeTemplate />
    </Layout>
  )
}
