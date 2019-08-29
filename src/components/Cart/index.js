import React, { useContext } from 'react'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const context = useContext(StoreContext)
  const { checkout } = context

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems 
    ? checkout.lineItems.map(line_item => (
        <LineItem key={line_item.id.toString()} line_item={line_item} />
      ))
    : null

  return (
    <div>
      {line_items}
      <h2>Subtotal</h2>
      <p>{checkout.subtotalPrice} €</p>
      <br />
      <h2>Steuern</h2>
      <p>{checkout.totalTax} €</p>
      <br />
      <h2>Gesammt</h2>
      <p>{checkout.totalPrice} €</p>
      <br />
      <button onClick={handleCheckout}>Kaufen</button>
    </div>
  )
}

export default Cart
