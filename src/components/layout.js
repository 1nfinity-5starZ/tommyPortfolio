/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          theme {
            primaryColor
          }
        }
      }
    }
  `)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header siteTitle={data.site.siteMetadata.title} theme={data.site.siteMetadata.theme} />
      <main
        style={{
          width: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem 0 2rem'
        }}
      >
        {children}
      </main>
      <Footer theme={data.site.siteMetadata.theme}/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
