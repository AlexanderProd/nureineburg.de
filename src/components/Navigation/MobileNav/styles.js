import styled from '@emotion/styled'

export const Wrapper = styled.div`
  visibility: ${({ visible }) => visible ? 'block' : 'hidden'};
  z-index: 3;
  position: absolute; 
  width: ${({ visible }) => visible ? '100%' : '0'};
  min-height: 100vh;
  background-color: rgba(28, 29, 29, 1);
  color: white;
  overflow-x: hidden;
  white-space: nowrap;
  transition: 0.5s;
`

export const ItemsList = styled.ul`
  list-style-type: none;
  margin: 4rem 0;
  padding: 0;
`

export const PrimaryNavItem = styled.li`
  font-family: Roboto, HelveticaNeue, Helvetica Neue, sans-serif;
  font-weight: 300;
  line-height: 1.6;
  font-size: 1.5rem;
  margin-bottom: 0;
  padding: 15px 1.45rem 15px;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1.45rem;
    right: 1.45rem;
    border-bottom: 1px solid #343535;
  }
`

export const SecondaryNavItem = styled.li`
  font-family: Roboto, HelveticaNeue, Helvetica Neue, sans-serif;
  font-weight: 300;
  font-size: 1rem;
  margin-bottom: 0;
  padding: 15px 1.45rem 15px;
  position: relative;
  cursor: pointer;
`