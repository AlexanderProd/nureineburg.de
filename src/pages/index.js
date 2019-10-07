import React from 'react'
import styled from '@emotion/styled'

import SEO from '../components/seo'
import Navigation from '../components/Navigation'
import Slideshow from '../components/Slideshow'
import { Container } from '../utils/styles'
import slide_1 from '../images/slider_1.jpg'
import slide_2 from '../images/slider_2.jpg'

const SlideWrapper = styled.div`
  position: absolute;
  max-width: 100vw;
  z-index: 2;
  top: 0;
`

const Wrapper = styled.div`
  margin-top: 100vh;
`

const slides = [
  {
    id: 1,
    image: slide_1,
    firstText: 'Erster Text',
    secondText: 'Zweiter Text',
    buttonLink: '/',
    buttonText: 'Jetzt Shoppen',
    color: 'white',
  },
  {
    id: 2,
    image: slide_2,
    firstText: 'Erster Text',
    secondText: 'Zweiter Text',
    buttonLink: '/cart',
    buttonText: 'Jetzt Shoppen',
    color: 'white',
  },
]

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`nureinberg`, `nürnberg`, `fashion`]} />
    <Navigation color='white' />
    <SlideWrapper>
      <Slideshow slides={slides}/>
    </SlideWrapper>
    <Wrapper>
      <Container>
        <p>
          Lorem Ipsum
        </p>
      </Container>
    </Wrapper>
  </>
)

export default IndexPage
