import React, { useContext, useState, useEffect } from 'react'
import { navigate } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import LayoutContext from '~/context/LayoutContext'
import { useWindowDimensions, useSiteMetadata } from '~/utils/hooks'
import { Container } from '~/utils/styles'
import Cart from '../Cart'
import MobileNav from './MobileNav'
import HamburgerIcon from './HamburgerIcon'
import CloseIcon from './CloseIcon'
import CartIcon from './CartIcon'
import Logo from './Logo'
import { breakpoints } from '~/utils/styles'
import {
	MenuItem, 
	Wrapper, 
	GridLeft, 
	GridRight,
	MenuWrapper,
} from './styles'


const countQuantity = ({ lineItems=[] }) => {
	let quantity = 0
	lineItems.forEach(item => quantity += item.quantity)
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
	const { primaryNav } = useSiteMetadata()
	
	useEffect(() => {
		setQuantity(countQuantity(checkout))
	}, [checkout])

	useEffect(() => {
		if (mobileNavVisible) {
			setNavBarColor('white')
		} else {
			setNavBarColor(color)
		}
	}, [mobileNavVisible, color])

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
						<Logo 
							onClick={() => {
								setMobileNavVisible(false)
								navigate('/')
							}} 
							color={navBarColor} 
							height={width > breakpoints.s ? '1.3rem' : '1.1rem'} 
						/>
					</GridLeft>
					<GridRight>
						<MenuWrapper>
							{primaryNav.map(({ name, link }) => (
								<MenuItem key={name} to={link} color={color}>
									{name}
								</MenuItem>
							))}
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
