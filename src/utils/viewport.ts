import { useEffect } from 'react'

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

export const scrollOnRouteChange = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}
