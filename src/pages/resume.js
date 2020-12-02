import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ResumeSection from "../components/sections/ResumeSection"
import Header from "../components/layout/Header"

function Resume() {
  return (
    <Layout>
      <SEO title="Resume" />
      <Header />
      <ResumeSection />
    </Layout>
  )
}

export default Resume
