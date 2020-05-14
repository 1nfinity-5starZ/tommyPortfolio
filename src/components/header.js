import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

import FlexCenter from './flexCenter';
import Drawer from './drawer';

import variables from '../variables.json';

import logo from '../images/tommyHerbstLogo2.png';

const routes = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/contact', label: 'contact' },
]

const StyledHeader = styled.header`
  background-color: ${variables.colorPrimary0};

  nav {
      a {
          margin-right: 1.5rem;
          text-decoration: none;
          color: #FFF;

          &:hover {
              color: ${variables.colorPrimary1};
          }

          &:last-child {
            margin-right: 0;
          }
      }
  }
`;

const listNav = () => routes.map(({ to, label }) => <Link to={to}>{label}</Link>);

const Header = ({ siteTitle }) => {
  const [drawer, setDrawer] = useState(false);
  return (
    <StyledHeader>
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
            <FlexCenter>
              <span style={{ backgroundColor: 'white', marginRight: '0.75rem', padding: 4, display: 'flex' }}>
                <img src={logo} style={{ margin: 0 }}/>
              </span>
              {siteTitle}
            </FlexCenter>
          </Link>
        </h2>
        <div className="mobile tablet">
          <FaBars style={{ color: '#FFF' }} onClick={() => setDrawer(true)}/>
        </div>
        <div className="desktop">
          <nav>
            {listNav()}
          </nav>
        </div>
      </FlexCenter>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
