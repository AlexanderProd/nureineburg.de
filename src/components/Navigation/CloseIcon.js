import React from 'react'

import { HamburgerWrapper } from './styles'

const CloseIcon = ({ size = 30, color, onClick }) => (
  <HamburgerWrapper onClick={onClick}>
    <svg
      height={size}
      viewBox="0 0 32 32" 
      width={size}
      style={{ color }}
    >
      <polygon 
        points="26.3,6.5 25.5,5.7 16,15.3 6.5,5.7 5.7,6.5 15.3,16 5.7,25.5 6.5,26.3 16,16.7 25.5,26.3 26.3,25.5 16.7,16 "
        stroke="currentColor"
        fill="currentColor"
      />
    </svg>
  </HamburgerWrapper>
)

export default CloseIcon