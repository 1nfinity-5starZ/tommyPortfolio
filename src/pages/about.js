import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from '../variables.json';

const topSkills = [
  {
  title: 'React', desc: 'Building reusable components with the new Hooks API. Redux, ImmerJS and Styled Components are my go-to dependencies.'
  },
  {title: 'NodeJS', desc: 'Creating REST APIs with async/await logic. Express'},
  {title: 'MongoDB', desc: 'Smartly storing data for high performance operations',
}]

const inProgress = [
  {
  title: 'GraphQL', desc: 'Building reusable components with the new Hooks API'
  },
  {title: 'TypeScript', desc: 'Exposing REST APIs with async/await logic'},
  {title: 'Docker', desc: 'Smartly storing data for high performance operations',
}]

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <section style={{ paddingTop: '1rem' }}>
      <h1>about me</h1>
      <p>Computer enginner with 3 years experience in web and mobile development.</p>
      <p>I got into coding when sliding text with marquee tag was cool, page layouts were made with tables
and PHP 
      </p>
    </section>
    <section>
      <h2>Top Skills</h2>
      <p>These are the technologies I'm pretty comfortable working with at the moment.</p>
      <div 
        style={{ 
          display: 'grid', 
          gridGap: '2rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' 
        }}
      >
        {topSkills.map(({ title, desc }) =>
          <Card>
            <h3 style={{ textAlign: 'center' }}>{title}</h3>
            <p>{desc}</p>
          </Card>
        )}
      </div>
    </section>
    <section>
      <h2>In Progress</h2>
      <p>Tools I'm intrested in learning and have been using in side projects.</p>
      <div 
        style={{ 
          display: 'grid', 
          gridGap: '2rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' 
        }}
      >
        {inProgress.map(({ title, desc }) =>
          <Card>
            <h3 style={{ textAlign: 'center' }}>{title}</h3>
            <p>{desc}</p>
          </Card>
        )}
      </div>
    </section>
  </Layout>
)

const Card = styled.span`
  border-radius: 1.5rem;
  box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.3);
  padding: 1rem;
  background: ${styles.primaryDarker};
  background: linear-gradient(185deg, ${styles.primaryColor} 0%, ${styles.primaryDarker} 100%);
  color: #FFF;
`;

export default About
