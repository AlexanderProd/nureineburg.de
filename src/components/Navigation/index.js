import React, { useContext, useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import StoreContext from '../../context/StoreContext'
import LayoutContext from '../../context/LayoutContext'
import { useWindowDimensions } from '../../utils/hooks'
import { Container } from '../../utils/styles'
import Cart from '../Cart'
import MobileNav from './MobileNav'
import HamburgerIcon from './HamburgerIcon'
import CloseIcon from './CloseIcon'
import CartIcon from './CartIcon'
import Logo from './Logo'
import { breakpoints } from '../../utils/styles'
import {
	MenuItem, 
	Wrapper, 
	GridLeft, 
	GridRight,
	MenuWrapper,
} from './styles'


const countQuantity = ({ lineItems=[] }) => {
	let quantity = 0

	lineItems.forEach(item => {
		quantity = quantity + item.quantity
	});

	return quantity
}

const Navigation = ({ color }) => {
	const { checkout } = useContext(StoreContext)
	const { 
		mobileNavVisible, 
		toggleMobileNav,
		setMobileNavVisible,
		cartVisible,
		toggleCart
	} = useContext(LayoutContext)
	const [quantity, setQuantity] = useState(countQuantity(checkout))
	const [navBarColor, setNavBarColor] = useState(color)
	const { width } = useWindowDimensions()
	const { site: { siteMetadata }} = useStaticQuery(graphql`
    query Navigation {
			site {
				siteMetadata {
					primaryNav {
						name
						link
					}
				}
			}
		}
	`)
	
	const MenuItems = siteMetadata.primaryNav 
		? siteMetadata.primaryNav.map(({ name, link }) => (
			<MenuItem key={name} to={link} color={color}>
				{name}
			</MenuItem>
		))
		: null
	
	useEffect(() => {
		setQuantity(countQuantity(checkout))
	}, [checkout])

	useEffect(() => {
		if (mobileNavVisible) {
			setNavBarColor('white')
		} else {
			setNavBarColor(color)
		}
	}, [mobileNavVisible])

	return (
		<>
			<MobileNav visible={mobileNavVisible} />
			<Cart visible={cartVisible} setVisibility={toggleCart}/>
			<Container>
				<Wrapper>
					{mobileNavVisible 
						? <CloseIcon color={navBarColor} onClick={toggleMobileNav} /> 
						: <HamburgerIcon color={navBarColor} onClick={toggleMobileNav} />}
					<GridLeft>
						<Logo to='/' color={navBarColor} height={width > breakpoints.s ? '1.3rem' : '1.1rem'} />
					</GridLeft>
					<GridRight>
						<MenuWrapper>
							{MenuItems}
							<CartIcon 
								onClick={() => {
									setMobileNavVisible(false)
									toggleCart()
								}}
								color={navBarColor} 
								count={quantity}
							/>
						</MenuWrapper>
					</GridRight>
				</Wrapper>
			</Container>
		</>
	) 
}

export default Navigation
