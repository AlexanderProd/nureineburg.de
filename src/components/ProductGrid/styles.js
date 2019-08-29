import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${breakpoints.s}){
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export const Title = styled.span`
  font-family: "Roboto","HelveticaNeue","Helvetica Neue",sans-serif;
  font-weight: 300;
  font-style: italic;
  font-size: 1.25rem;
  text-align: center;
`

export const PriceTag = styled.span`
  font-family: "Roboto","HelveticaNeue","Helvetica Neue",sans-serif;
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
  margin-top: 15px;

  :before {
    content: '- '
  }
`