import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 1fr;
  column-gap: 20px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1pt solid #343535;
`

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  align-content: flex-start;
`

export const ProductName = styled.p`
  margin-top: 0px;
  line-height: 1.3;
  font-style: italic;
`

export const LastRow = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Price = styled.span`
  align-self: flex-end;
  font-family: "Montserrat","HelveticaNeue","Helvetica Neue",sans-serif;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const ButtonWrapper = styled.div`
  width: 100px;
`

export const QuantityInput = styled.input`
  font-family: "Roboto","HelveticaNeue","Helvetica Neue",sans-serif;
  margin: 0;
  padding: 0;
  background-color: transparent;
  text-align: center;
  color: white;
  border: 1px solid #343535;
  font-size: 16px;
  line-height: 1.563;
  max-width: 50px;
`

export const QuantityButton = styled.button`
  margin: 0;
  padding: 0;
  background-color: transparent;
  text-align: center;
  color: white;
  border: 1px solid #343535;
  font-size: 16px;
  line-height: 1.563;
  min-width: 15px;
  width: 25px;
  transition: 0.2s;

  &:hover {
    background-color: #343535;
  }
`