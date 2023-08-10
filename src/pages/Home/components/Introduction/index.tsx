import { ConcentricCircles } from 'src/components/ConcentricCircles'
import styles from './index.module.scss'
import { NavigationHeader } from 'src/components/NavigationHeader'

export const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <NavigationHeader />
      <ConcentricCircles
        className={styles.top_left_circle}
        circularGap={65}
        size={440}
      />
    </div>
  )
}
