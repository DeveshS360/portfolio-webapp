import React, { RefObject, useMemo, useRef, useState } from 'react'
import styles from './index.module.scss'
import { CarouselProps } from './types'
import cx from 'classnames'

export const Carousel = (props: CarouselProps) => {
  const { children, countInFrame } = props
  const [activeDot, setActiveDot] = useState(0)

  const carouselRef = useRef(null)

  const renderChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null
    return child
  })

  const count = renderChildren.length

  const refArr = useMemo(() => {
    return new Array<RefObject<HTMLDivElement>>(count)
      .fill(null)
      .map(() => React.createRef<HTMLDivElement>())
  }, [count])

  const handleScroll = (idx: number) => {
    const elementToScrolltoLeftPos =
      refArr[idx].current?.getBoundingClientRect().left
    const carouselLeftPos = carouselRef.current?.getBoundingClientRect().left

    // below logic is found by hit and trial
    const carouselUpdatedLeftPos =
      idx * Math.abs(elementToScrolltoLeftPos - carouselLeftPos)

    carouselRef.current?.scrollTo({
      left: carouselUpdatedLeftPos,
      behavior: 'smooth',
    })
  }

  const nonVisibleElementsCount = count - countInFrame

  const handleDotClick = (idx: number) => {
    if (activeDot === idx) return
    setActiveDot(idx)
    handleScroll(idx)
  }

  return (
    <div className={styles.carousel_wrapper}>
      <div ref={carouselRef} className={styles.carousel}>
        {renderChildren.map((renderChild, idx) => (
          <div ref={refArr[idx]} key={idx}>
            {renderChild}
          </div>
        ))}
      </div>
      <div className={styles.dots_container}>
        {new Array(nonVisibleElementsCount + 1).fill(0).map((_, idx) => (
          <span
            className={cx(styles.dots, {
              [styles.selected]: activeDot === idx,
            })}
            key={idx}
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </div>
    </div>
  )
}
