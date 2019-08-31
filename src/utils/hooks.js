import { useState, useEffect } from 'react'

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  function getWindowDimensions() {
    if (typeof window !== 'undefined') {
      const { innerWidth: width, innerHeight: height } = window
      return {
        width,
        height
      }
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
