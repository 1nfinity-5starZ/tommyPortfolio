import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ theme }) => (  
  <footer
    style={{ 
      backgroundColor: theme.primaryColor,
      marginTop: 'auto',
      color: '#FFF'
    }}
  >
    <section
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </section>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
