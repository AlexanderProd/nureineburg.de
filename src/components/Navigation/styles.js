import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { colors, breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  position: relative;
  z-index: 20;
  padding-top: 1.45rem;
  padding-bottom: 1.45rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-template-areas: "left right";

  @media (max-width: ${breakpoints.l}px){
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const LogoWrapepr = styled.span`
  cursor: pointer;
`

export const HamburgerWrapper = styled.span`
  z-index: 23;
  cursor: pointer;

  @media (min-width: ${breakpoints.l}px){
    display: none;
  }
`

export const GridLeft = styled.div`
  grid-area: left;
`

export const GridRight = styled.div`
  grid-area: right;
`

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
`

export const MenuItem = styled(Link)`
	color: ${({ color }) => color ? color : 'black'};
	text-decoration: none;
  font-size: 1rem;
  margin-right: 1.45rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-family: Montserrat, HelveticaNeue, Helvetica Neue, Helvetica, sans-serif;
  font-weight: 400;
  display: none;

  &:hover {
    border-bottom: 1pt solid ${({ color }) => color ? color : 'black'};
  }

  @media (min-width: ${breakpoints.l}px){
    display: block;
  }
`

export const CartCounter = styled.span`
	background-color: white;
	color: #663399;
	border-radius: 20px;
	padding: 0 10px;
	font-size: 1.2rem;
	float: right;
	margin: -10px;
	z-index: 22;
`

export const CartWrapper = styled.div`
  justify-self: flex-end;
  position: relative;
  height: 32px;
  width: 32px;
  cursor: pointer;
`

export const CartCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryColor};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: -4px;
  left: -4px;
  font-size: 10px;
  text-align: center;
  color: ${colors.colorOnPrimary};
`
