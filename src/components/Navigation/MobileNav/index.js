import React, { useContext } from 'react'
import { navigate } from 'gatsby'

import LayoutContext from './../../../context/LayoutContext'
import { useSiteMetadata } from '../../../utils/hooks'
import { 
  Wrapper,
  ItemsList,
  PrimaryNavItem,
  SecondaryNavItem,
} from './styles'

const MobileNav = ({ visible }) => {
  const { toggleMobileNav } = useContext(LayoutContext)
  const { primaryNav, secondaryNav } = useSiteMetadata()

  const handleClick = link => {
    toggleMobileNav()
    navigate(link)
  }

  const PrimaryNav = primaryNav
    ? primaryNav.map(({ name, link }) => (
      <PrimaryNavItem key={name} onClick={() => handleClick(link)}>
        {name}
      </PrimaryNavItem>
    ))
    : null

  const SecondaryNav = secondaryNav
    ? secondaryNav.map(({ name, link }) => (
      <SecondaryNavItem key={name} onClick={() => handleClick(link)}>
        {name}
      </SecondaryNavItem>
    ))
    : null

  return (
    <Wrapper visible={visible}>
      <ItemsList>
        {PrimaryNav}
        {SecondaryNav}
      </ItemsList>
    </Wrapper>
  )
}

export default MobileNav