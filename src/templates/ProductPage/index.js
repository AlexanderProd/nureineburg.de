import React from 'react'
import { graphql } from 'gatsby'
import { Slide } from 'react-slideshow-image'

import SEO from '~/components/seo'
import Navigation from '~/components/Navigation'
import ProductForm from '~/components/ProductForm'
import Footer from '~/components/Footer'
import { useWindowDimensions } from '~/utils/hooks'
import {
  breakpoints,
  Img,
  Container, 
  TwoColumnGrid,
  MainContent,
} from '~/utils/styles'
import {
  ProductTitle,
  ProductDescription
} from './styles'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  
  const ProductImages = () => {
    const { width } = useWindowDimensions()

    const properties = {
      duration: 5000,
      transitionDuration: 350,
      infinite: false,
      indicators: true,
      arrows: true,
    }

    if (product.images) {
      return (
        <div>
          {width < breakpoints.l 
            ? <Slide {...properties}>
                {product.images.map(i => (
                  <Img
                    fluid={i.localFile.childImageSharp.fluid}
                    alt={product.title}
                    key={i.id}
                  />
                ))}
              </Slide>
            : product.images.map(image => (
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                alt={product.title}
                key={image.id}
              />
            ))
          }
        </div>
      )
    }
  }

  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Navigation/>
      <Container>
        <MainContent>
          <TwoColumnGrid>
            <ProductImages/>
            <div>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductForm product={product} />
              <ProductDescription 
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} 
              />
            </div>
          </TwoColumnGrid>
        </MainContent>
        <Footer />
      </Container>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
