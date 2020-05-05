import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import Img from "gatsby-image"
import { FaReact, FaNodeJs, FaDocker, FaAws, FaJira, FaGit } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import GraphqlIcon from '../images/graphql.jsx';
import TsIcon from '../images/tsicon.jsx';

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlexCenter from "../components/flexCenter"
import Card from "../components/card"
import Heading from "../components/heading"

import styles from '../variables.json';

const topSkills = [
  {
  title: 'React', desc: 'Fully adapted to Hooks. Redux, ImmerJS and Styled Components are my go-to dependencies.', icon: FaReact
  },
  {title: 'NodeJS', desc: 'Been using NodeJS in back-end along with Express to create REST APIs.', icon: FaNodeJs},
  {title: 'MongoDB', desc: 'Most modern applications can benefit from a non-relational database.', icon: DiMongodb },
  {title: 'AWS', desc: 'Familiar with EC2, S3, EB and Lambda Functions for serverless applications.', icon: FaAws }, 
  {title: 'Jira', desc: 'One of the best tools to manage teams using agile methods.', icon: FaJira }, 
  {title: 'Git', desc: 'For versioning and sharing code with the team.', icon: FaGit, 
}]

const inProgress = [
  {
  title: 'GraphQL', desc: 'REST is great, but GraphQL seems promissing to increase reusability and avoid overfetching.', icon: GraphqlIcon
  },
  {title: 'TypeScript', desc: 'Type errors are very common (and annoying) in JavaScript.', icon: TsIcon},
  {title: 'Docker', desc: 'Containerization brings DevOps to a whole new level.', icon: FaDocker
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
        <h1>Intro</h1>
        <FluidFlex style={{ display: 'flex' }} gutter="2rem">
          <div style={{ flex: 2 }}>
            <p>Electrical & Computer Engineering degree at Universidade de São Paulo.</p>
            <p>3 years experience as fullstack developer, mainly using the MERN stack for web along with React Native for mobile.</p>
            <p>Lately leaning towards frontend to focus on customer experience and learn more about UX and UI.</p>
          </div>
          <span className="mobile-center" style={{ flex: 1, maxWidth: 250, width: '100%' }}>
            <Img fluid={data.avatarImage.childImageSharp.fluid} style={{ borderRadius: 150 }}/>
          </span>
        </FluidFlex>
      </section>
      <section>
        <Heading type="primary">Top Skills</Heading>
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
        <Heading type="secondary">In Progress</Heading>
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

const PrimaryCard = styled(Card)`
  background: ${styles.colorPrimary0};
  background: linear-gradient(185deg, ${styles.colorPrimary0} 0%, ${styles.colorPrimary4} 100%);
`;

const SecondaryCard = styled(Card)`
  background: ${styles.colorSecondary0};
  background: linear-gradient(185deg, ${styles.colorSecondary0} 0%, ${styles.colorSecondary4} 100%);
`;

export default About
