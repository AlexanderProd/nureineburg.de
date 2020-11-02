import React from 'react'

import { CartWrapper } from './styles'

const CartIcon = ({ size = 32, count = 0, countColor = 'currentColor', color, onClick }) => (
  <CartWrapper onClick={onClick} style={{ color }}>
    <svg width={size} height={size} viewBox="0 0 49 35" version="1.1">
      <g id="Cart-Icon" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd">
        <path
          d="M11.7142857,7.58909025 C11.189647,7.58909025 10.754206,7.9945378 10.716827,8.5178432 L9.0025413,32.5178432 C9.00084764,32.5415545 9,32.5653186 9,32.5890903 C9,33.141375 9.44771525,33.5890903 10,33.5890903 L38.7040946,33.5890903 C38.7278663,33.5890903 38.7516304,33.5882426 38.7753417,33.586549 C39.3262229,33.5472003 39.740902,33.0687244 39.7015533,32.5178432 L37.9872676,8.5178432 C37.9498886,7.9945378 37.5144476,7.58909025 36.9898089,7.58909025 L11.7142857,7.58909025 Z"
          id="Rectangle"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M30.8520473,12.8054902 C30.8520473,11.4495597 30.8520473,9.49412534 30.8520473,6.93918717 C30.8520473,3.10677992 27.9418982,-1.77635684e-15 24.3520473,-1.77635684e-15 C20.7621964,-1.77635684e-15 17.8520473,3.10677992 17.8520473,6.93918717 L17.8520473,12.8054902"
          id="Oval"
          stroke="currentColor"
          strokeWidth="2"
        />
      </g>
      {count && count > 0 ? (
        <text fill={countColor} x="24.5" y="28" textAnchor="middle" fontSize="20" fontFamily="sans-serif">
          {count}
        </text>
      ) : null}
    </svg>
  </CartWrapper>
)

export default CartIcon