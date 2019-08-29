import React, { useContext, useState, useEffect } from 'react'
import { useStaticQuery, navigate } from 'gatsby'

import StoreContext from '../../context/StoreContext'
import LayoutContext from '../../context/LayoutContext'
import { Container } from '../../utils/styles'
import MobileNav from './MobileNav'
import HamburgerIcon from './HamburgerIcon'
import CloseIcon from './CloseIcon'
import CartIcon from './CartIcon'
import Logo from './Logo'
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
		setMobileNavVisible
	} = useContext(LayoutContext)
	const [quantity, setQuantity] = useState(countQuantity(checkout))
	const [navBarColor, setNavBarColor] = useState(color)
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

	/* useEffect(() => {
		if (!mobileNavVisible) {
			setNavBarColor(navBarColor)
		} else {
			setNavBarColor('white')
		}
	}, [mobileNavVisible]) */

	return (
		<>
			<MobileNav visible={mobileNavVisible} />
			<Container>
				<Wrapper>
					{mobileNavVisible 
						? <CloseIcon color={color} onClick={toggleMobileNav} /> 
						: <HamburgerIcon color={color} onClick={toggleMobileNav} />}
					<GridLeft>
						<Logo to='/' color={color} height='1.3rem' />
					</GridLeft>
					<GridRight>
						<MenuWrapper>
							{MenuItems}
							<CartIcon 
								onClick={() => {
									setMobileNavVisible(false)
									navigate('/cart')
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
