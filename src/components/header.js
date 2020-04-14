import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FaBars } from 'react-icons/fa';

import FlexCenter from './flexCenter';
import Drawer from './drawer';

import headerClass from '../styles/header.module.scss';

const routes = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/contact', label: 'contact' },
]

const listNav = () => routes.map(({ to, label }) => <Link to={to}>{label}</Link>);

const Header = ({ siteTitle, theme }) => {
  const [drawer, setDrawer] = useState(false);
  return (
    <header
      style={{
        background: theme.primaryColor,
      }}
      className={headerClass.header}
    >
      <Drawer
        open={drawer}
        onToggle={e => setDrawer(e)}
      >
        {listNav()}
      </Drawer>
      <FlexCenter
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.5rem 1rem`,
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
          <FaBars style={{ color: '#FFF' }} onClick={() => setDrawer(true)}/>
        </div>
        <div className="desktop">
          <nav>
            {listNav()}
          </nav>
        </div>
      </FlexCenter>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
