import { useRef, useState } from 'react'
import { MeterProps } from './types'
import styles from './index.module.scss'
import { checkInViewPort, useInViewPort } from 'src/utils/viewport'

export const Meter = (props: MeterProps) => {
  const { field, percentage } = props
  const [percent, setPercent] = useState(0)

  const meterRef = useRef<HTMLDivElement>(null)

  const animationRef = useRef(false)

  const handleScroll = () => {
    if (animationRef.current) return
    if (!meterRef.current) return
    if (checkInViewPort(meterRef.current)) {
      animationRef.current = true
      setPercent(percentage)
    }
  }

  useInViewPort(handleScroll)

  const percentStyle = {
    fontFamily: 'Poppins-Regular',
    fontSize: '18px',
    marginLeft: `${percent}%`,
    color: 'var(--text-color-secondary)',
    transition: 'all 1s ease-in-out',
  }

  const meterStyle = {
    width: `${percent}%`,
    height: 'inherit',
    background: 'var(--text-color-primary)',
    transition: 'all 1s ease-in-out',
  }

  return (
    <div className={styles.container}>
      <div className={styles.field}>{field}</div>
      <div style={percentStyle}>{percentage}%</div>
      <div className={styles.meter_wrapper}>
        <div ref={meterRef} style={meterStyle} />
      </div>
    </div>
  )
}
