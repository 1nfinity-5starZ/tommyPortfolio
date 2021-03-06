import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaExternalLinkAlt } from 'react-icons/fa';

import Carousel from "../components/carousel"
import FlexCenter from "../components/flexCenter"

export default function PortfolioCarousel() {
  const data = useStaticQuery(graphql`
    query {
      b2bAfyaMobile: file(relativePath: { eq: "portfolioScreens/b2bAfyaLPMobile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      b2bAfyaDesktop: file(relativePath: { eq: "portfolioScreens/b2bAfyaLPDesktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      } 
      medcelStudentAreaMobile: file(relativePath: { eq: "portfolioScreens/medcelStudentAreaMobile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      medcelStudentAreaDesktop: file(relativePath: { eq: "portfolioScreens/medcelStudentAreaDesktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      } 
      medcelSiteMobile: file(relativePath: { eq: "portfolioScreens/medcelSiteMobile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      medcelSiteDesktop: file(relativePath: { eq: "portfolioScreens/medcelSiteDesktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      } 
      afyaSiteMobile: file(relativePath: { eq: "portfolioScreens/afyaSiteMobile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      afyaSiteDesktop: file(relativePath: { eq: "portfolioScreens/afyaSiteDesktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      } 
      medcelAdminMobile: file(relativePath: { eq: "portfolioScreens/medcelAdminMobile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      medcelAdminDesktop: file(relativePath: { eq: "portfolioScreens/medcelAdminDesktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      } 
      afyaAdminMobile: file(relativePath: { eq: "portfolioScreens/afyaAdminMobile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      afyaAdminDesktop: file(relativePath: { eq: "portfolioScreens/afyaAdminDesktop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      } 
    }
  `)

  const artDirectBuilder = (prefix) => ([
    data[`${prefix}Mobile`].childImageSharp.fluid,
    {
      ...data[`${prefix}Desktop`].childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ])

  return (
    <Carousel>
      <Car 
        title="Afya B2B Landing Page"
        link="http://portal.dasaeduca.com.br"
        desc="Afya's new B2B partnership with DASA"
        images={<Img fluid={artDirectBuilder('b2bAfya')} />}
      />
      <Car 
        title="Afya Admin"
        desc="Internal management system for Afya, supporting all company's areas"
        images ={<Img fluid={artDirectBuilder('afyaAdmin')} />}
      />
      <Car 
        title="Afya Website"
        link="http://afya.com.br"
        desc="Institutional Afya website"
        images ={<Img fluid={artDirectBuilder('afyaSite')} />}
      />
      <Car 
        title="Medcel Website"
        link="http://medcel.com.br"
        desc="E-commerce for the Medcel online courses"
        images={<Img fluid={artDirectBuilder('medcelSite')} />}
      />
      <Car 
        title="Medcel Student Area"
        link="http://areaaluno.medcel.com.br"
        desc="Medcel main product, its online learning platform. Try the 7 day free trial."
        images={<Img fluid={artDirectBuilder('medcelStudentArea')} />}
      />
      <Car 
        title="Medcel Admin"
        desc="Internal management system for Medcel, supporting all company's areas"
        images ={<Img fluid={artDirectBuilder('medcelAdmin')} />}
      />
    </Carousel>
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
            <a style={{ color: 'white' }} href={link} target="_newtab">
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
