import { useEffect, useState } from 'react'
import { MeterProps } from './types'
import styles from './index.module.scss'

export const Meter = (props: MeterProps) => {
  const { field, percentage } = props
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    setPercent(percentage)
  }, [])

  const percentStyle = {
    fontFamily: 'Poppins-Regular',
    fontSize: '18px',
    marginLeft: `${percent / 2}%`,
    color: 'var(--text-color-secondary)',
    transition: 'all 2s ease-in-out',
  }

  const meterStyle = {
    width: '100%',
    height: '5px',
    overflow: 'hidden',
    background:
      'linear-gradient(to right, var(--text-color-primary) 50%, transparent 0) no-repeat',
    backgroundSize: `${percent}%`,
    transition: 'all 2s ease-in-out',
  }

  return (
    <div className={styles.container}>
      <div style={percentStyle}>{percent}</div>
        <div style={meterStyle} />
    </div>
  )
}
