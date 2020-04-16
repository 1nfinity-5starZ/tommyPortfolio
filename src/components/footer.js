import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

import variables from '../variables.json';

const StyledFooter = styled.footer`
  background-color #333;
  margin-top: auto;
  color: #FFF;
  display: flex;
`;

const Footer = () => (  
  <StyledFooter>
    <section
      style={{
        maxWidth: 960,
        padding: `2rem 1rem`,
        margin: '0 auto',
        flex: 1
      }}
    >
      © {new Date().getFullYear()}
      <nav>
        <span><FaGithub/></span>
      </nav>
    </section>
  </StyledFooter>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
