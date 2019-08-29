import React from 'react'

import SEO from '../components/seo'
import Navigation from '../components/Navigation'
import { 
  Container, 
  PageTitle, 
  MainContent 
} from '../utils/styles'
import ProductGrid from '../components/ProductGrid'

const SecondPage = () => (
  <>
    <SEO title="NurEineBurg - Produkte" />
    <Navigation/>
    <Container>
      <MainContent>
        <PageTitle>Produkte</PageTitle>
        <ProductGrid/>
      </MainContent>
    </Container>
  </>
)

export default SecondPage
