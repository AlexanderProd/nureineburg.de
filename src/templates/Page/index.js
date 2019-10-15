import React from 'react'

import SEO from '../../components/seo'
import Navigation from '../../components/Navigation'
import { Container } from '../../utils/styles'
import Footer from '../../components/Footer'

const Page = ({ title, children }) => (
  <>
    <SEO title={title} />
    <Navigation />
    <Container>
      {children}
      <Footer />
    </Container>
  </>
)

export default Page
