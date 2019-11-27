import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About me</h1>
    <p>Welcome to page 2 this is a page about me</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
