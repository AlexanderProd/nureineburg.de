import React from 'react'

import Cart from '../components/Cart'
import Navigation from '../components/Navigation'
import { Container } from '../utils/styles'

const CartPage = () => (
  <>
    <Navigation/>
    <Container>
      <h1>Cart</h1>
      <Cart />
    </Container>
  </>
)

export default CartPage
