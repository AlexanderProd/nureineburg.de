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
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;

  @media (max-width: ${breakpoints.s}px){
    margin-bottom: 2rem;
    align-items: center;
  }
`

export const Item = styled(Link)`
  color: black;
  line-height: 1.563;
  font-size: 16px;
  text-decoration: none;
  margin-bottom: 0.25rem;
`

export const SocialMediaLinks = styled.ul`
  list-style: none outside;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: black;
    margin-left: 5px;
  }
`

export const Cards = styled.div`
  text-align: right;

  svg {
    margin-left: 0.5rem;
  }

  @media (max-width: ${breakpoints.s}px){
    text-align: center;
  }
`