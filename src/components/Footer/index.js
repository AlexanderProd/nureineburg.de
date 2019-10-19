import React from 'react'

import { useSiteMetadata } from '../../utils/hooks'
import { 
	Wrapper,
	Links,
	Item,
	Cards,
	SocialMediaLinks
} from './styles'
import { 
	Amex,
	ApplePay,
	Maestro,
	Mastercard,
	PayPal,
	Visa,
	Instagram
} from './icons'

const Footer = () => {
	const { title, secondaryNav, socialLinks } = useSiteMetadata()
	
	const links = (arr, n) => {
		let chunkLength = Math.max(arr.length / n, 1)
		let chunks = []
		for (let i = 0; i < arr.length; i++) {
			if (chunkLength * (i+1) <= arr.length)
				chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)))
		}
		return chunks
	}
  
  return (
    <Wrapper>
			<Links>
				{links(secondaryNav, 2)[0].map(({ name, link }) => (
					<Item to={link} key={name}>{name}</Item>
				))}
			</Links>
			<Links>
				{links(secondaryNav, 2)[1].map(({ name, link }) => (
					<Item to={link} key={name}>{name}</Item>
				))}
			</Links>
			<Links>
				<SocialMediaLinks>
					{socialLinks.map(({ name, link }) => {
						return (
							<li>
								{name.toLowerCase() === 'instagram' ? <Instagram height='18px' /> : null}
								<a href={link} key={name} target='_blank'>{name}</a>
							</li>
						)
					})}
				</SocialMediaLinks>
			</Links>
			<Cards>
				<p>© {new Date().getFullYear()} {title}</p>
				<Amex height='40px' />
				<ApplePay height='40px' />
				<Maestro height='40px' />
				<PayPal height='40px' />
				<Mastercard height='40px' />
				<Visa height='40px' />
				<p>Banküberweisung</p>
			</Cards>
    </Wrapper>
  )
}

export default Footer