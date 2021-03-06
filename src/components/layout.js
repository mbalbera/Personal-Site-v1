/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import TopMenu from './topMenu'
import SideMenu from './sideMenu'
import Header from "./header"
import "./layout.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children, colorScheme, changeColors }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <SideMenu style={{ zIndex: 10 }} changeColors={changeColors} colorScheme={colorScheme}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '85%',
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: -150,
          paddingLeft: '15%',
          zIndex: 0
        }}
      >
        <main 
        style={{
          zIndex: -4
        }}
        >
          {children}
        </main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
