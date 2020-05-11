import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

import variables from '../variables.json';

const StyledFooter = styled.footer`
  background-color #222;
  margin-top: auto;
  color: #FFF;
  display: flex;
`;

const ButtonIcon = styled.span`
  border: 1px solid #FFF;
  color: #FFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
  
  :hover {
    color: #CCC;
    border-color: #CCC;
  }
`;

const FooterLink = ({ children, ...props }) => {
  const Wrapper = props.to ? Link : 'a';

  return (
    <Wrapper {...props} target="_newtab" style={{ margin: '0 1rem' }}>
      <ButtonIcon>
        {children}
      </ButtonIcon>
    </Wrapper>
  )
}

const FooterContainer = styled.section`
  max-width: 960px;
  padding: 2rem 1rem;
  margin: 0 auto;
  flex: 1;
  display: flex;
  overflow: hidden;

  @media (max-width: ${variables.tablet}px) {
    flex-direction: column;
    text-align: center;

    & > :first-child {
      margin-bottom: 1rem;
    }
  }
`;

const Footer = () => (  
  <StyledFooter>
    <FooterContainer> 
      <span style={{ flex: 1 }}>© Thomas Herbst {new Date().getFullYear()}</span>
      <span style={{ width: 1, backgroundColor: '#AAA'}}></span>
      <nav style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <FooterLink href="https://github.com/1nfinity-5starZ">
          <FaGithub/>
        </FooterLink>
        <FooterLink href="https://www.linkedin.com/in/thomas-herbst-b95033150/">
          <FaLinkedin/>
        </FooterLink>
        <FooterLink href="mailto:duzevic.thomas@hotmail.com">
          <FaEnvelope/>
        </FooterLink>
        <FooterLink href="https://www.facebook.com/WeAreStarStuff/">
          <FaFacebook/>
        </FooterLink>    
        <FooterLink href="https://www.instagram.com/thom.herbst/">
          <FaInstagram/>
        </FooterLink>       
      </nav>
    </FooterContainer>
  </StyledFooter>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
