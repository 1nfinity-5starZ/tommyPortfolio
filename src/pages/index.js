import React, { useEffect, useState } from "react"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioCarousel from "../components/portfolioCarousel"

import variables from '../variables.json';

const fadeInOut = keyframes`
  0% {
    opacity:0;
  }
  25% {
    opacity:1;
  }
  75% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
}
`;

const HeroContainer = styled.div`
  position: relative;
  padding: 0;
  min-height: 50vh;
  display: flex;
  align-items: center;
  color: #FFF;
  margin-bottom: 1em;
  justify-content: space-around;
  
  background: linear-gradient(180deg, ${variables.colorPrimary0} 0%, ${variables.colorPrimary0} calc(50% - 1px), ${variables.colorSecondary0} 50%, ${variables.colorSecondary2} 100%);
  flex-direction: column;

  @media (min-width: 830px) {
    background: linear-gradient(90deg, ${variables.colorPrimary0} 0%, ${variables.colorPrimary0} calc(50% - 1px), ${variables.colorSecondary0} 50%, ${variables.colorSecondary2} 100%);
    flex-direction: row;

    h1 {
      flex: 1;
    }
  }

  @media (min-width: 1024px) {
    margin-top: -1rem;
  }

  h1 {
    margin: 0;
    text-align: center;
  }

  &:not(.finished) {
    h1 {
      animation: ${fadeInOut} ease 3s infinite;
    }
  }
  
  .centerText {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
`;

const words = ['Creating', 'Amazing', 'Experiences'];

const IndexPage = () => {

  const [index, setIndex] = useState(0)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    let id = setInterval(() => {
      setIndex(i => {
        if(i === 2) {
          clearInterval(id);
          setFinished(true);
        }
        return (i + 1) % 3
      });
    }, 3000)
  },[])

  return (
    <Layout>
      <SEO title="Home" />
      <HeroContainer className={finished ? 'finished' : ''}>
        <h1 style={{ color: variables.colorPrimary4 }}>{words[index]}</h1>
        <h1 className="centerText">{words[(index+1)%3]}</h1>
        <h1 style={{ color: variables.colorSecondary4 }}>{words[(index+2)%3]}</h1>
      </HeroContainer>
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
