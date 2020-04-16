import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ position: 'relative', marginTop: '-1rem' }}>
        <div 
          style={{ 
            height: '100%', 
            width: '100%', 
            position: 'absolute', 
            zIndex: 1, 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF',
            padding: '1rem'
          }}
        >
          <h2 style={{ textAlign: 'center' }}>Web Development</h2>
        </div>
        <Img fluid={data.heroImage.childImageSharp.fluid} style={{ maxHeight: 350 }} objectPosition="50% 0%"/>
      </div>
      <div style={{ fontStyle: 'italic', textAlign: 'center' }}>
        image from unsplash
      </div>
      <section style={{ paddingTop: '1rem' }}>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </section>
    </Layout>
  )
}

export default IndexPage
