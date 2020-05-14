import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioCarousel from "../components/portfolioCarousel"

import variables from '../variables.json';

const HeroContainer = styled.section`
  position: relative;
  padding: 0;

  @media (min-width: 768px) {
    margin-top: -1rem;
  }

  .innerContainer {
      height: 66.66%;
      width: 66.66%;
      left: 16.66%;
      top: 16.66%;
      position: absolute;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFF;
      padding: 1rem;
      background-color: rgba(255,255,255,0.6);
      
      // @media (min-width: 768px) {
      //   outline: 10px solid rgba(255,255,255,0.25);
      // }
  }
`;

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
      <HeroContainer>
        <div className="innerContainer">
          <h1 style={{ textAlign: 'center', color: variables.colorPrimary4, padding: '1rem 2rem', fontSize: '2.75rem' }}>Creating amazing experiences</h1>
        </div>
        <Img fluid={data.heroImage.childImageSharp.fluid} style={{ maxHeight: 350 }} />
      </HeroContainer>
      <div style={{ fontStyle: 'italic', textAlign: 'center' }}>
        still working on a nice hero
      </div>
      <section style={{ paddingTop: '1rem' }}>
        <h2>Hi people</h2>
        <p>I created this portfolio/cover website to try out the promising <a href='https://www.gatsbyjs.org/'>Gatsby</a> framework (which is indeed awesome).</p>
        <p>It's open source and available <a href="https://github.com/1nfinity-5starZ/tommyPortfolio" target="_newtab">here</a>. 
        My goal was to use as few dependencies as possible and build my own components, like the carousel, gallery, drawer, cards, etc.</p>
      </section>
      <section>
        <h2>Projects</h2>
        <p>Here are the most relevant projects I've been part of:</p>
        <PortfolioCarousel />
      </section>
    </Layout>
  )
}

export default IndexPage
