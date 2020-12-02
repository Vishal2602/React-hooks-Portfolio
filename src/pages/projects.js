import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ProjectSection from "../components/sections/ProjectSection"
import Header from "../components/layout/Header"

function SecondPage() {
  return (
    <Layout>
      <SEO title="Projects" />

      <ProjectSection />
    </Layout>
  )
}

export default SecondPage
