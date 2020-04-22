import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"

import variables from '../variables.json';

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
            padding: '1rem',

          }}
        >
          <h2 style={{ textAlign: 'center' }}>Web Development</h2>
        </div>
        <Img fluid={data.heroImage.childImageSharp.fluid} style={{ maxHeight: 350, maxWidth: 960, margin: '0 auto' }} />
      </div>
      <div style={{ fontStyle: 'italic', textAlign: 'center' }}>
        image from unsplash
      </div>
      <section style={{ paddingTop: '1rem' }}>
        <h1>Hi people</h1>
        <p>I started this portfolio/cover website project to try out the promising <a href='#'>Gatsby</a> framework. (which is indeed awesome)</p>
        <p>Now go build something great.</p>
        <Carousel>
          <div>gayzão</div>
          <div>bixona</div>
          <div>a</div>
          <div>bibxona</div>
          <div>aaa</div>
        </Carousel>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
