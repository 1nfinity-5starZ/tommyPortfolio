import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import Img from "gatsby-image"
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import GraphqlIcon from '../images/graphql.jsx';
import TsIcon from '../images/tsicon.jsx';

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlexCenter from "../components/flexCenter"
import Card from "../components/card"

import styles from '../variables.json';

const topSkills = [
  {
  title: 'React', desc: 'Fully adapted to Hooks. Redux, ImmerJS and Styled Components are my go-to dependencies.', icon: FaReact
  },
  {title: 'NodeJS', desc: 'Creating REST APIs with async/await logic. Express', icon: FaNodeJs},
  {title: 'MongoDB', desc: 'Smartly storing data for high performance operations', icon: DiMongodb,
}]

const inProgress = [
  {
  title: 'GraphQL', desc: 'Building reusable components with the new Hooks API', icon: GraphqlIcon
  },
  {title: 'TypeScript', desc: 'Exposing REST APIs with async/await logic', icon: TsIcon},
  {title: 'Docker', desc: 'Smartly storing data for high performance operations', icon: FaDocker
}]

const renderCards = (parentProps) => {
  return parentProps.list.map(({ title, desc, ...props}) =>    
    <parentProps.component>
      {props.icon ? <props.icon className="brandIcon"/>: null}
      <h3 style={{ textAlign: 'center' }}>{title}</h3>
      <p>{desc}</p>
    </parentProps.component>
  )
}

const About = () => {  
  const data = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "avatar.png" }) {
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
      <SEO title="About Me" />
      <section>
        <h1>about me</h1>
        <FluidFlex style={{ display: 'flex' }} gutter="2rem">
          <div style={{ flex: 1 }}>
            <p>Computer engineer with 3 years experience in web and mobile development.</p>
            <p>I got into coding when sliding text with marquee tag was cool, page layouts were made with tables
      and PHP 
            </p>
          </div>
          <span className="mobile-center" style={{ width: 200 }}>
            <Img fluid={data.avatarImage.childImageSharp.fluid} style={{ borderRadius: 150 }}/>
          </span>
        </FluidFlex>
      </section>
      <section>
        <StyledHeading type="primary">Top Skills</StyledHeading>
        <p>These are the technologies I'm pretty comfortable working with at the moment.</p>
        <div 
          style={{ 
            display: 'grid', 
            gridGap: '2rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' 
          }}
        >
          {renderCards({ list: topSkills, component: PrimaryCard })}
        </div>
      </section>
      <section>
        <StyledHeading>In Progress</StyledHeading>
        <p>Tools I'm intrested in learning and have been using in side projects.</p>
        <div 
          style={{ 
            display: 'grid', 
            gridGap: '2rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' 
          }}
        >
          {renderCards({ list: inProgress, component: SecondaryCard })}
        </div>
      </section>
    </Layout>
  )
}

const FluidFlex = styled.div`
  margin: 0 -${props => props.gutter ? Number(props.gutter.replace('rem', ''))/2 + 'rem' : 0};

  div {
    margin: 0 ${props => props.gutter ? Number(props.gutter.replace('rem', ''))/2 + 'rem' : 0};
  }

  @media (max-width: 579px) {
    flex-direction: column;
    
    .mobile-center {
      margin: 0 auto;
    }
  }
`;

const StyledHeading = styled.h2`
  color: ${({ type }) => type == 'primary' ? styles.colorPrimary0 : styles.colorSecondary2_0};
  padding-left: 1rem;
  position: relative;

  &:before {
    position: absolute;
    left: 0;
    content: '';
    width: 4px;
    height: 2rem;
    background-color: ${({ type }) => type == 'primary' ? styles.colorPrimary0 : styles.colorSecondary2_0};
  }
`;

const PrimaryCard = styled(Card)`
  background: ${styles.colorPrimary0};
  background: linear-gradient(185deg, ${styles.colorPrimary0} 0%, ${styles.colorPrimary4} 100%);
`;

const SecondaryCard = styled(Card)`
  background: ${styles.colorSecondary2_0};
  background: linear-gradient(185deg, ${styles.colorSecondary2_0} 0%, ${styles.colorSecondary2_4} 100%);
`;

export default About
