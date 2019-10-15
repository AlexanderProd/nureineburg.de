import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { 
	Wrapper,
	Links,
	Item,
	Cards
} from './styles'

const Footer = () => {
	const { site: { siteMetadata: { secondaryNav } } } = useStaticQuery(graphql`
    query Footer {
			site {
				siteMetadata {
					secondaryNav {
						name
						link
					}
				}
			}
		}
	`)
	
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
				{links(secondaryNav, 2)[0].map(({ name, link }, index) => (
					<Item to={link} key={`${index}-${name}`}>{name}</Item>
				))}
			</Links>
			<Links>
				{links(secondaryNav, 2)[1].map(({ name, link }, index) => (
					<Item to={link} key={`${index}-${name}`}>{name}</Item>
				))}
			</Links>
			<Links>
				test
			</Links>
			<Cards>
				test
			</Cards>
    </Wrapper>
  )
}

export default Footer