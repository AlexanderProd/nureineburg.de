import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Navigation from '../components/Navigation'
import { Container } from '../utils/styles'

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <Navigation/>
    <Container>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </>
)

export default SecondPage
