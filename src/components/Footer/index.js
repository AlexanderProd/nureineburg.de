import React from 'react'

import { Wrapper } from './styles'

const Footer = () => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
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
  
  return (
    <Wrapper>

    </Wrapper>
  )
}

export default Footer