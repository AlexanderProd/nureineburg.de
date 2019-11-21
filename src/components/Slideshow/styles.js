import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'

export const SlideshowImage = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  object-position: center;
`

export const Caption = styled.div`
  color: ${({ color }) => color ? color : 'black'};
  position: absolute;
  z-index: unset;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;

  animation: fadedown 1s;
  @keyframes fadedown {
    from { 
      opacity: 0;
      transform: translateY(-50px)
    }
    to { 
      opacity: 1; 
      transform: translateY(0px)
    }
  }
`

export const Title = styled.h1`
  font-family: Old Standard TT, serif;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 4rem;
  line-height: 1.25;
  margin: 0 0 0.5rem;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.2);

  @media (max-width: ${breakpoints.l}px){
    font-size: 3rem;
  }
`

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  letter-spacing 0.1rem;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.2);

  @media (max-width: ${breakpoints.l}px){
    font-size: 0.9rem;
  }
`