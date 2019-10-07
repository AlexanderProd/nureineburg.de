import styled from '@emotion/styled'

import { breakpoints, layout, typo } from '../../utils/styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProductPrice = styled.span`
  font-family: "Montserrat","HelveticaNeue","Helvetica Neue",sans-serif;
  font-weight: 400;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 1.5rem;
`

export const ProductOptions = styled.div`
  margin-bottom: ${layout.spacing * 2}px;
`

export const OptionName = styled.h3`
  text-align: center;
  font-size: ${typo.small};
  line-height: ${typo.lineRegular};
  font-family: "Roboto","HelveticaNeue","Helvetica Neue",sans-serif;
  font-weight: 300;
  margin: 0;
  margin-bottom: 0.5rem;
`

export const OptionValues = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: ${breakpoints.m}px) {
    justify-content: flex-start;
  }
`

export const ProductValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 38px;
  min-height: 38px;
  text-align: center;
  border: ${({ active }) => (active ? '1pt solid black' : '1pt solid transparent')};
  padding: 0 ${layout.spacing}px;
  margin-right: ${layout.spacing}px;
  margin-bottom: ${layout.spacing}px;
  background-color: ${({ active }) => (active ? '#F2F2F2' : 'transparent')};
  color: black;
  overflow: hidden;
  font-family: "Montserrat","HelveticaNeue","Helvetica Neue",sans-serif;
  font-size: ${typo.small};
  font-weight: 400;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.8)};
  &:hover {
    opacity: 1;
  }
`

export const ActiveWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid;
  border-color: ${({ active }) => (active ? '#000' : 'transparent')};
  background-color: transparent;
  margin-right: ${layout.spacing}px;
  transition: all 0.3s ease;
  &:hover {
    border-color: ${({ active }) => (active ? '#000' : '#dedede')};
  }
  &:last-of-type {
    margin-right: 0;
  }
`
