import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-template-areas: ". . . .";
  margin-top: 6rem;
  margin-bottom: 1.45rem;

  @media (max-width: ${breakpoints.s}px){
    display: flex;
    flex-direction: column;
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
`

export const Item = styled(Link)`
  color: black;
  line-height: 1.563;
  font-size: 16px;
  text-decoration: none;
`

export const Cards = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  align-content: flex-start;
`