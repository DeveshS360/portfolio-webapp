import { useEffect, useState } from 'react'
import {
  checkIfMediumDesktop,
  checkIfMobileOrTablet,
  checkIfSmallDesktop,
  checkifMobile,
} from 'src/constants/screen'

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
  const [isSmallDesktop, setIsSmallDesktop] = useState(checkIfSmallDesktop())
  const [isMediumDesktop, setIsMediumDesktop] = useState(checkIfMediumDesktop())
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    checkIfMobileOrTablet()
  )
  const [isMobile, setIsMobile] = useState(checkifMobile())

  const handleWindowResize = () => {
    setIsSmallDesktop(checkIfSmallDesktop())
    setIsMediumDesktop(checkIfMediumDesktop)

    setIsMobileOrTablet(checkIfMobileOrTablet())
    setIsMobile(checkifMobile())
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return { isMediumDesktop, isSmallDesktop, isMobileOrTablet, isMobile }
}
