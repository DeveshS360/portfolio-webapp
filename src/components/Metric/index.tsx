import styles from './index.module.scss'
import { MetricProps } from './types'

export const Metric = (props: MetricProps) => {
  const { icon, text, count, countSuffix } = props

  return (
    <div className={styles.metric_section}>
      <div className={styles.icon_section}>{icon}</div>
      <div className={styles.metric}>
        <div className={styles.count}>
          {count}
          {countSuffix || ''}
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  )
}
