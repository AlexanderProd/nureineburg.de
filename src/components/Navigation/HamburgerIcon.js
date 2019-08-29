import React from 'react'

import { HamburgerWrapper } from './styles'

const HamburgerIcon = ({ size = 30, color, onClick }) => (
  <HamburgerWrapper onClick={onClick}>
    <svg
      height={size}
      viewBox="0 0 32 32" 
      width={size}
      style={{ color }}
    >
      <path 
        d="M2,8h28 M2,16h28 M2,24h28" 
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  </HamburgerWrapper>
)

export default HamburgerIcon