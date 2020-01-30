import React from "react"
import Layout from "src/components/layout"
import { SEO } from "src/components/seo"
import { SoundLabTemplate } from "src/templates/SoundLabTemplate"

const SoundLabPage = _props => {
  return (
    <Layout>
      <SEO title="SoundLab" />
      <SoundLabTemplate />
    </Layout>
  )
}

export default SoundLabPage
