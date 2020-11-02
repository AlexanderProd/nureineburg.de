import React from 'react'
import PropTypes from 'prop-types'

import { LayoutProvider } from '../context/LayoutContext'
import { StoreProvider } from '../context/StoreContext'
import { GlobalStyle } from '../utils/styles'

const Layout = ({ children }) => (
  <StoreProvider>
    <LayoutProvider>
      <GlobalStyle/>
      {children}
    </LayoutProvider>
  </StoreProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
