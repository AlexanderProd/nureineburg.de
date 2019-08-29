import React, { useState } from 'react'

export const defaultLayoutContext = {
  mobileNavVisible: false,
  toggleMobileNav: () => {},
  setMobileNavVisible: () => {},
  cartVisible: false,
  toggleCart: () => {},
}

const LayoutContext = React.createContext(defaultLayoutContext)

export const LayoutProvider = ({ children }) => {
  const [mobileNavVisible, setMobileNavVisible] = useState(defaultLayoutContext.mobileNavVisible)
  const [cartVisible, setCartVisible] = useState(defaultLayoutContext.cartVisible)

  const toggleCart = () => {
    setCartVisible(!cartVisible)
  }

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible)
  }

  const layout = {
    mobileNavVisible,
    toggleMobileNav,
    setMobileNavVisible,
    cartVisible,
    toggleCart,
  } 

  return (
    <LayoutContext.Provider value={layout}>
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutContext