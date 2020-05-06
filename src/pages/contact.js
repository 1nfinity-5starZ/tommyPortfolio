import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlexCenter from "../components/flexCenter";
import Button from "../components/button";

const links = [
  {
    name: 'Github',
    icon: FaGithub,
    link: 'https://github.com/1nfinity-5starZ'
  },
  {
    name: 'Linkedin',
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/thomas-herbst-b95033150/'
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    link: 'mailto:duzevic.thomas@hotmail.com'
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://www.facebook.com/WeAreStarStuff/'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com/thom.herbst/'
  }
]

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section>
      <h2>Contact</h2>
      <p>Find me at social:</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {links.map(link =>
          <a href={link.link} target="_newtab" style={{ marginBottom: '1rem', textDecoration: 'none' }}>
            <Button>
              <link.icon style={{ marginRight: '0.5rem' }}/>
              <span>{link.name}</span>
            </Button>
          </a>
        )}
      </div>
    </section>
  </Layout>
)

export default Contact
