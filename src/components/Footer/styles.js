import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  display: grid;

  @media (max-width: ${breakpoints.s}px){
    display: flex;
    flex-direction: column;
  }
`