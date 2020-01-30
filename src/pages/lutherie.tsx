import React from "react"
import Layout from "src/components/layout"
import { SEO } from "src/components/seo"
import { LutherieTemplate } from "src/templates/lutherie"

const LutheriePage = _props => {
  return (
    <Layout>
      <SEO title="Lutherie" />
      <LutherieTemplate />
    </Layout>
  )
}

export default LutheriePage
