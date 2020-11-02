import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Aside = styled.div`
  background: #1C1D1D;
  width: ${({ cartVisible }) => cartVisible ? '20vw' : 0};
  padding: ${({ cartVisible }) => cartVisible ? '1.45rem' : 0};
  transition: width 500ms ease-in-out, padding 500ms ease-in-out;
`

export const Main = styled.div`
  transition: width 500ms ease-in-out, margin-right 500;
  width: ${({ cartVisible }) => cartVisible ? '80vw' : '100vw'};
  margin-right: ${({ cartVisible }) => cartVisible ? '-20vw' : 0};
`