import React from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
})

export const defaultStoreContext = {
  client,
  adding: false,
  checkout: { 
    lineItems: []
  },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
}

const StoreContext = React.createContext(defaultStoreContext)

export class StoreProvider extends React.Component {
  state = {
    ...defaultStoreContext,
    addVariantToCart: (variantId, quantity) => {
      if (variantId === '' || !quantity) {
        console.error('Both a size and quantity are required.')
        return
      }

      this.setState(state => ({
        ...state,
        adding: true,
      }))

      const { checkout, client } = this.state
      const checkoutId = checkout.id
      const lineItemsToUpdate = [
        { variantId, quantity: parseInt(quantity, 10) },
      ]

      return client.checkout
        .addLineItems(checkoutId, lineItemsToUpdate)
        .then(checkout => {
          this.setState(state => ({
            ...state,
            checkout,
            adding: false,
          }))
        })
    },
    removeLineItem: (client, checkoutID, lineItemID) => {
      return client.checkout
        .removeLineItems(checkoutID, [lineItemID])
        .then(res => {
          this.setState(state => ({
            ...state,
            checkout: res,
          }))
        })
    },
    updateLineItem: (client, checkoutID, lineItemID, quantity) => {
      const lineItemsToUpdate = [
        { id: lineItemID, quantity: parseInt(quantity, 10) },
      ]

      return client.checkout
        .updateLineItems(checkoutID, lineItemsToUpdate)
        .then(res => {
          this.setState(state => ({
            ...state,
            checkout: res,
          }))
        })
    },
  }

  async initializeCheckout() {
    // Check for an existing cart.
    const isBrowser = typeof window !== 'undefined'
    const existingCheckoutID = isBrowser
      ? localStorage.getItem('shopify_checkout_id')
      : null

    const setCheckoutInState = checkout => {
      if (isBrowser) {
        localStorage.setItem('shopify_checkout_id', checkout.id)
      }

      this.setState(state => ({
        ...state,
        checkout,
      }))
    }

    const createNewCheckout = () => this.state.client.checkout.create()
    const fetchCheckout = id => this.state.client.checkout.fetch(id)

    if (existingCheckoutID) {
      try {
        const checkout = await fetchCheckout(existingCheckoutID)

        // Make sure this cart hasn’t already been purchased.
        if (!checkout.completedAt) {
          setCheckoutInState(checkout)
          return
        }
      } catch (e) {
        localStorage.setItem('shopify_checkout_id', null)
      }
    }

    const newCheckout = await createNewCheckout()
    setCheckoutInState(newCheckout)
  }


  componentDidMount() {
    this.initializeCheckout()
  }

  render() {
    return (
      <StoreContext.Provider value={this.state}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export default StoreContext
