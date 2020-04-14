import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlexCenter from "../components/flexCenter"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <FlexCenter 
      style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', padding: '1rem 1.5rem' }}
    >
      <h1>NOT FOUND</h1>
      <p style={{ textAlign: 'center'}}>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </FlexCenter>
  </Layout>
)

export default NotFoundPage
