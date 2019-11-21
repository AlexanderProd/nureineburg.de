import React from 'react'
import styled from '@emotion/styled'
import { 
  useStaticQuery, 
  graphql, 
  navigate 
} from 'gatsby'

import SEO from '~/components/seo'
import Navigation from '~/components/Navigation'
import Slideshow from '~/components/Slideshow'
import Footer from '~/components/Footer'
import { 
  Container,
  TwoColumnGrid,
  Button,
  Img
} from '~/utils/styles'
import slide_1 from '~/images/slider_1.jpg'
import slide_2 from '~/images/slider_2.jpg'

const SlideWrapper = styled.div`
  position: absolute;
  max-width: 100vw;
  z-index: 2;
  top: 0;
`

const Wrapper = styled.div`
  margin-top: 100vh;
`

const Index = () => {
  const data = useStaticQuery(graphql`
    query IndexPageImages {
      image1: file(relativePath: { eq: "heart.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "DSC_6561_ret.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "label.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide1: file(relativePath: { eq: "slider_1.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide2: file(relativePath: { eq: "slider_2.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const slides = [
    {
      id: 1,
      image: data.slide1.childImageSharp.fluid,
      firstText: 'Mode & Fashion',
      secondText: 'Im Zeichen der Burg',
      buttonLink: '/products',
      buttonText: 'Jetzt Shoppen',
      color: 'white',
    },
    {
      id: 2,
      image: data.slide2.childImageSharp.fluid,
      firstText: 'Mode & Fashion',
      secondText: 'Eine Stadt, Eine Marke',
      buttonLink: '/product/nureinberg-pocket/',
      buttonText: 'Zum Pocket Shirt',
      color: 'white',
    },
  ]

  return (
    <>
      <SEO title="Home" keywords={[`nureinberg`, `nürnberg`, `fashion`]} />
      <Navigation color='white' />
      <SlideWrapper>
        <Slideshow slides={slides} />
      </SlideWrapper>
      <Wrapper>
        <Container>
          <TwoColumnGrid>
            <Img
              fluid={data.image1.childImageSharp.fluid}
              alt="NurEinHerz"
            />
            <div>
              <h3>NUREINHERZ</h3>
              <p>
                Pro verkauftem NurEinHerz Shirt spenden wir 2€ an die Nürnberger Bahnhofsmission. Jetzt kaufen und Gutes tun.
              </p>
              <Button onClick={() => navigate('product/nureinherz-charity-shirt/')}>Zum Shirt</Button>
            </div>
            <div>
              <h3>NUREINEBURG BLACK SHIRT</h3>
              <p>
                Unser NurEinBerg Black Shirt wurde mit einer Speziellen Technik hergestellt, bei welcher der Druck nicht auf das Shirt aufgetragen, sondern aus dem Hintergrund geblichen wurde. Dadurch schaut der Druck auch nach sehr vielen Waschungen immer noch wie am ersten Tag aus.
              </p>
              <Button onClick={() => navigate('product/schwarzes-shirt-mit-gegerbtem-druck/')}>Zum Shirt</Button>
            </div>
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="NurEinHerz"
            />
            <Img
              fluid={data.image3.childImageSharp.fluid}
              alt="NurEinHerz"
            />
            <div>
              <h3>NUREINEBURG LABEL</h3>
              <p>
                Alle unsere Produkte kommen mit dem offiziellen NurEinBerg Label. Angenäht mit Hand und <span role="img" aria-label="heart">❤️</span> in Nürnberg.
              </p>
              <Button onClick={() => navigate('product/nureinberg-basic-black/')}>Zum Shirt</Button>
            </div>
          </TwoColumnGrid>
          <h3>
            UNSERE VERANTWORTUNG
          </h3>
          <p>
            Weil wir finden das Nachhaltigkeit und ein gesunder Lebenstil wichtig sind, verwenden wir bei allen unseren Shirts Textilien aus nachhaltiger und ökoligscher Produktion.
          </p>
          <Footer/>
        </Container>
      </Wrapper>
    </>
  )
}

export default Index
