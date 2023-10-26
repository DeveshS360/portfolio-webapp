import { useEffect } from "react"

export const useInViewPort = (scrollFn: () => void) => {
  useEffect(() => {
    window.addEventListener('scroll', scrollFn)

    return () => window.addEventListener('scroll', scrollFn)
  }, [scrollFn])
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
