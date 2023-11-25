import { useEffect, useState } from 'react'
import { DESKTOP_BREAK_POINTS } from 'src/constants/screen'

export const useWindowScroll = (scrollFn: () => void) => {
  useEffect(() => {
    window.addEventListener('scroll', scrollFn)

    return () => window.addEventListener('scroll', scrollFn)
  }, [])
}

export const checkInViewPort = (ele: HTMLElement) => {
  const boundingRect = ele.getBoundingClientRect()

  const { right, left, top, bottom } = boundingRect

  if (
    top >= 0 &&
    left >= 0 &&
    bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    right <= (window.innerWidth || document.documentElement.clientWidth)
  )
    return true
  return false
}

export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}

export const useDeviceWidth = () => {
  const [isSmallDesktop, setIsSmallDesktop] = useState(false)
  const [isMediumDesktop, setIsMediumDesktop] = useState(false)
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)

  const handleWindowResize = () => {
    setIsSmallDesktop(
      window.innerWidth >= DESKTOP_BREAK_POINTS.small &&
        window.innerWidth <= DESKTOP_BREAK_POINTS.medium - 1
    )
    setIsMediumDesktop(
      window.innerWidth >= DESKTOP_BREAK_POINTS.medium &&
        window.innerWidth <= DESKTOP_BREAK_POINTS.large - 1
    )

    setIsMobileOrTablet(window.innerWidth < DESKTOP_BREAK_POINTS.small)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return { isMediumDesktop, isSmallDesktop, isMobileOrTablet }
}
