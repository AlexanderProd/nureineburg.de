import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  right: 0;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  z-index: 22;
  position: absolute; 
  width: ${({ visible }) => visible ? '100%' : '0'};
  min-height: 100%;
  height: 100%;
  background-color: rgba(28, 29, 29, 1);
  color: white;
  white-space: nowrap;
  overflow-x: hidden;
  transition: 0.5s;

  @media (min-width: ${breakpoints.m}px){
    width: ${({ visible }) => visible ? '45%' : '0'};
  }

  @media (min-width: ${breakpoints.l}px){
    width: ${({ visible }) => visible ? '35%' : '0'};
  }

  @media (min-width: ${breakpoints.xl}px){
    width: ${({ visible }) => visible ? '25%' : '0'};
  }
`

export const Content = styled.div`
  margin: 1.45rem;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.45rem;
  border-bottom: 1pt solid #343535;
`

export const Title = styled.h1`
  color: white;
  font-size: 1.8rem;
  font-family: "Old Standard TT",serif;
  font-weight: 400;
  margin: 0;
  padding: 0;
`

export const SubtotalWrapper = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
`

export const Subtotal = styled.h3`
  font-family: "Montserrat","HelveticaNeue","Helvetica Neue",sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const Price = styled.span`
`

export const Notice = styled.p`
  font-size: 16px;
  font-style: italic;
  font-weight: normal;
  opacity: 0.7;
`

export const BuyButton = styled.button`
  background-color: #2AC0FB;
  color: white;
  width: 100%;
  text-decoration: none;
  font-size: 1rem;
  padding-right: 1.45rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-family: Montserrat, HelveticaNeue, Helvetica Neue, Helvetica, sans-serif;
  font-weight: 400;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: none;
  align-self: flex-end;
  transition: 0.2s;

  &:hover {
    background-color: RGBA(42, 192, 251, 0.80);
  }
`

export const IconWrapper = styled.span`
  z-index: 23;
  cursor: pointer;
`
