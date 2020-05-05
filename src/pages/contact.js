import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlexCenter from "../components/flexCenter";
import Button from "../components/button";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section style={{ paddingTop: '1rem' }}>
      <h1>Find me also at</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <a href="https://github.com/1nfinity-5starZ" target="_newtab">
          <Button>
            <FaGithub style={{ marginRight: '0.5rem' }}/>
            <span>Github</span>
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/thomas-herbst-b95033150/" target="_newtab">
          <Button>
            <FaLinkedin style={{ marginRight: '0.5rem' }}/>
            <span>Linkedin</span>
          </Button>
        </a>
        <a href="mailto:duzevic.thomas@hotmail.com" target="_newtab">
          <Button>
            <FaEnvelope style={{ marginRight: '0.5rem' }}/>
            <span>Email</span>
          </Button>
        </a>
        <a href="https://www.facebook.com/WeAreStarStuff/" target="_newtab">
          <Button>
            <FaFacebook style={{ marginRight: '0.5rem' }}/>
            <span>Facebook</span>
          </Button>
        </a>
        <a href="https://www.instagram.com/thom.herbst/" target="_newtab">
          <Button>
            <FaInstagram style={{ marginRight: '0.5rem' }}/>
            <span>Instagram</span>
          </Button>
        </a>
      </div>
    </section>
  </Layout>
)

export default Contact
