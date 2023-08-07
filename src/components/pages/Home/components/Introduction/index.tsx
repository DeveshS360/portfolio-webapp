import { ConcentricCircles } from '../../../../ConcentricCircles'
import styles from './index.module.scss'

export const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <ConcentricCircles
        className={styles.top_left_circle}
        circularGap={65}
        size={440}
      />
    </div>
  )
}
