import React from 'react'
import { graphql } from 'gatsby'

import Navigation from '../../components/Navigation'
import ProductForm from '../../components/ProductForm'
import { 
  Img, 
  Container, 
  TwoColumnGrid, 
  GridLeft, 
  GridRight,
  MainContent,
} from '../../utils/styles'
import { 
  ProductTitle, 
  ProductDescription 
} from './styles'
 
const ProductPage = ({ data }) => {
  const product = data.shopifyProduct

  const ProductImages = product.images 
    ? product.images.map(elem => (
        <Img
          fluid={elem.localFile.childImageSharp.fluid}
          key={elem.id}
          alt={product.title}
        />
      ))
    : null


  return (
    <>
      <Navigation/>
      <Container>
        <MainContent>
          <TwoColumnGrid>
            <GridLeft>
              {ProductImages}
            </GridLeft>
            <GridRight>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductForm product={product} />
              <ProductDescription 
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} 
              />
            </GridRight>
          </TwoColumnGrid>
        </MainContent>
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
