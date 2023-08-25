import { ConcentricCircles } from '../ConcentricCircles'
import styles from './index.module.scss'
import cx from 'classnames'
import { ServiceCardProps } from './types'

export const ServiceCard = (props: ServiceCardProps) => {
  const { bulletPoints, imageUrl, title } = props.cardData
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="card-icon" />
      <p className={styles.title}>{title}</p>
      {bulletPoints.map((bulletContent, idx) => {
        return (
          <p className={styles.bullet_point} key={idx}>
            {bulletContent}
          </p>
        )
      })}
      <ConcentricCircles
        className={cx(styles.circles, styles.top_circles)}
        count={3}
        size={350}
        circularGap={40}
        style={{ borderColor: 'rgba(255,255,255,0.05)' }}
      />
      <ConcentricCircles
        className={cx(styles.circles, styles.bottom_circles)}
        count={3}
        size={350}
        circularGap={40}
        style={{ borderColor: 'rgba(255,255,255,0.05)' }}
      />
    </div>
  )
}
