import React from 'react'
import { navigate } from 'gatsby'
import { Fade } from 'react-slideshow-image'

import { 
  SlideshowImage, 
  Caption,
  H1,
  H2
} from './styles'


const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  arrows: false,
}

const Slideshow = props => {

  const Slides = props.slides 
    ? props.slides.map(({
        id,
        image, 
        firstText, 
        secondText, 
        buttonLink,
        buttonText,
        color,
      }) => (
        <div className="each-fade" key={id}>
          <SlideshowImage src={image} />
          <Caption color={color}>
            <H2>{secondText}</H2>
            <H1>{firstText}</H1>
            <button onClick={() => navigate(buttonLink)}>
              {buttonText}
            </button>
          </Caption>
        </div>
      ))
    : null

  return (
    <Fade {...fadeProperties}>
      {Slides}
    </Fade>
  )
}

export default Slideshow