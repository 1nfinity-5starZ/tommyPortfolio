import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaExternalLinkAlt } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import FlexCenter from "../components/flexCenter"

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
      <div style={{ position: 'relative' }}>
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
        <p>I created this portfolio/cover website to try out the promising <a href='#'>Gatsby</a> framework (which is indeed awesome).</p>
        <p>It's open source and available <a href="https://github.com/1nfinity-5starZ/tommyPortfolio" target="_newtab">here</a>. 
        My goal was to use as few dependencies as possible and build my own components, like the carousel, gallery, drawer, cards, etc.</p>
        
        <Carousel>
          <Car 
            title="Medcel Website"
            link="http://medcel.com.br"
            desc="E-commerce bla bla bal bal and institutional etc ete cet"
            images ={
              <>    
                <Img 
                  className="tablet desktop"
                  fluid={data.heroImage.childImageSharp.fluid} 
                  style={{ height: 350, width: '100%' }} 
                />
                <div 
                  className="mobile"
                  style={{ height: 350, width: '100%', backgroundColor: 'orange' }} 
                />
              </>
            }
          />
          <div>Site Afya</div>
          <div>Area do Aluno</div>
          <div>Medcel Admin</div>
          <div>Afya Admin</div>
          <div>Home Energy Reader</div>
        </Carousel>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>
      </section>
    </Layout>
  )
}

const Car = React.memo(({ images, title, desc, link }) => {
  return (
    <div style={{ width: '100%', position: 'relative' }}>    
      {images}   
      <div
        style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, right: 0,
          padding: '1rem',                 
          backgroundColor: 'rgba(0,0,0,0.7)',
          color: '#FFF'
        }}
      >
        <FlexCenter style={{ marginBottom: '0.5rem' }}>
          {title &&
            <h4 style={{ marginBottom: 4, marginRight: '0.75rem' }}>
              {title}
            </h4>
          }
          {link &&
            <a style={{ color: 'white' }} href={link}>
              <FaExternalLinkAlt/>
            </a>
          }
        </FlexCenter>
        {desc &&
          <div>{desc}</div>
        }
      </div>
    </div>
  )
})

export default IndexPage
