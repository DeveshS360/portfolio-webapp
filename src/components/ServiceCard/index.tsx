import { ConcentricCircles } from '../ConcentricCircles'
import styles from './index.module.scss'
import serviceIcon from 'assets/images/service-icon-1.webp'
import cx from 'classnames'

export const ServiceCard = () => {
  const bulletPoint = [
    'Landing pages',
    'User flow',
    'Wire framing',
    'Prototyping',
  ]

  return (
    <div className={styles.card}>
      <img src={serviceIcon} alt="card-icon" />
      <p className={styles.title}>UI/UX Design</p>
      {bulletPoint.map((bulletContent, idx) => {
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
