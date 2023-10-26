import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import { MetricProps } from './types'
import { convertToDecimal } from 'src/utils/number'
import { checkInViewPort, useInViewPort } from 'src/utils/viewport'

export const Metric = (props: MetricProps) => {
  const { icon, text, count, countSuffix } = props

  const [currCount, setCurrCount] = useState(-1)

  const timeToBecomeEqualToCountInSeconds = 2.5

  const frequencyChangePerSecond = 25

  const valueToBeIncreased =
    count / (timeToBecomeEqualToCountInSeconds * frequencyChangePerSecond)

  type intervalType = ReturnType<typeof setInterval>

  const intervalRef = useRef<intervalType>()

  const metricRef = useRef<HTMLDivElement>()

  const handleScroll = useCallback(() => {
    if (currCount !== -1) return
    if (!metricRef.current) return
    if (checkInViewPort(metricRef.current)) {
      setCurrCount(0)
    }
  }, [currCount])

  useInViewPort(handleScroll)

  const increaseNumberToCount = () => {
    if (Math.floor(currCount) >= count) {
      clearInterval(intervalRef.current)
      setCurrCount((prev) => Math.ceil(prev))
      return
    }

    const newValue = convertToDecimal(currCount + valueToBeIncreased, 1)
    const isSameAsPrevious = currCount === newValue
    setCurrCount((prev) =>
      !isSameAsPrevious
        ? newValue
        : convertToDecimal(prev + valueToBeIncreased, 2)
    )
  }

  useEffect(() => {
    if (currCount === -1) return
    intervalRef.current = setInterval(
      increaseNumberToCount,
      1000 / frequencyChangePerSecond
    )

    return () => clearInterval(intervalRef.current)
  }, [currCount])

  return (
    <div ref={metricRef} className={styles.metric_section}>
      <div className={styles.icon_section}>{icon}</div>
      <div className={styles.metric}>
        <div className={styles.count}>
          {currCount}
          {countSuffix || ''}
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  )
}
