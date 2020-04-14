import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlexCenter from "../components/flexCenter";
import Button from "../components/button";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section style={{ paddingTop: '1rem' }}>
      <h2>find me also at</h2>
      <Button>
        <FaGithub style={{ marginRight: '0.5rem' }}/>
        <span>Github</span>
      </Button>
      <FlexCenter>
        <FaLinkedin />
        <span>Linkedin</span>
      </FlexCenter>
    </section>
  </Layout>
)

export default Contact
