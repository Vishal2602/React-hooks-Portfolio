import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ContactSection from "../components/sections/ContactSection"
import Header from "../components/layout/Header"

function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />

      <ContactSection />
    </Layout>
  )
}

export default Contact
