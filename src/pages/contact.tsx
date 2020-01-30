import React from "react"
import Layout from "src/components/layout"
import { SEO } from "src/components/seo"
import { ContactTemplate } from "src/templates/ContactTemplate"

export default function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactTemplate />
    </Layout>
  )
}
