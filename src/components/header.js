import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaBars } from 'react-icons/fa';

import FlexCenter from './flexCenter';

import headerClass from '../styles/header.module.scss';

const Header = ({ siteTitle, theme }) => (
  <header
    style={{
      background: theme.primaryColor,
      marginBottom: `1.45rem`,
    }}
    className={headerClass.header}
  >
    <FlexCenter
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2 style={{ margin: '0 auto 0 0' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <div className="mobile">
        <FaBars style={{ color: '#FFF' }}/>
      </div>
      <div className="desktop">
        <nav>
          <Link>Gay</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </FlexCenter>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
