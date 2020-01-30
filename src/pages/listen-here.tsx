import React from "react"
import Layout from "src/components/layout"
import { SEO } from "src/components/seo"
import { ListenHereTemplate } from "src/templates/listen-here"

const ListenHerePage = _props => {
  return (
    <Layout>
      <SEO title="Listen Here" />
      <ListenHereTemplate />
    </Layout>
  )
}

export default ListenHerePage
