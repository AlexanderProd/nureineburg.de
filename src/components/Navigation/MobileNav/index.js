import React, { useContext } from 'react'
import { useStaticQuery, navigate } from 'gatsby'

import LayoutContext from './../../../context/LayoutContext'
import { 
  Wrapper,
  ItemsList,
  PrimaryNavItem,
  SecondaryNavItem,
} from './styles'

const MobileNav = ({ visible }) => {
  const { toggleMobileNav } = useContext(LayoutContext)
  const { site: { siteMetadata } } = useStaticQuery(graphql`
  query MobileNav {
    site {
      siteMetadata {
        primaryNav {
          name
          link
        }
        secondaryNav {
          name
          link
        }
      }
    }
  }
  `)

  const handleClick = link => {
    toggleMobileNav()
    navigate(link)
  }

  const PrimaryNav = siteMetadata.primaryNav
    ? siteMetadata.primaryNav.map(({ name, link }) => (
      <PrimaryNavItem key={name} onClick={() => handleClick(link)}>
        {name}
      </PrimaryNavItem>
    ))
    : null

  const SecondaryNav = siteMetadata.secondaryNav
    ? siteMetadata.secondaryNav.map(({ name, link }) => (
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