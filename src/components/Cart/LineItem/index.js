import React, { useContext } from 'react'

import StoreContext from '../../../context/StoreContext'
import { 
  Wrapper,
  ProductImage,
  RightSide,
  LastRow,
  Price,
  ProductName,
  ButtonWrapper,
  QuantityInput,
  QuantityButton
} from './styles'

const LineItem = props => {
  const { 
    item, 
    currencyCode,
    client,
    checkout
  } = props
  const { 
    updateLineItem,
  } = useContext(StoreContext)

  const variantImage = item.variant.image 
    ? <ProductImage
        src={item.variant.image.src}
        alt={`${item.title} product shot`}
      />
    : null

  const selectedOptions = item.variant.selectedOptions 
    ? item.variant.selectedOptions.map(option => (
        `${option.value}`
      ))
    : null

  const price = Intl.NumberFormat(undefined, {
    currency: currencyCode ? currencyCode : 'EUR',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(item ? item.variant.price : 0));

  const handleInput = ({ target }) => {
    switch (target.name) {
      case 'plus':
        updateLineItem(client, checkout.id, item.id, item.quantity + 1)
        break;
      case 'minus':
        updateLineItem(client, checkout.id, item.id, item.quantity - 1)
        break;
      default:
        break;
    }
  }

  return (
    <Wrapper>
      {variantImage}
      <RightSide>
        <ProductName>{item.title}</ProductName>
        <span>{selectedOptions}</span>
        <LastRow>
          <ButtonWrapper>
            <QuantityButton onClick={handleInput} name='minus'>-</QuantityButton>
            <QuantityInput type='number' value={item.quantity} disabled/>
            <QuantityButton onClick={handleInput} name='plus'>+</QuantityButton>
          </ButtonWrapper>
          <Price>{price}</Price>
        </LastRow>
      </RightSide>
    </Wrapper>
  )
}

export default LineItem
