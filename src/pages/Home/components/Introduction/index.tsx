import { ConcentricCircles } from 'src/components/ConcentricCircles'
import styles from './index.module.scss'
import { NavigationHeader } from 'src/components/NavigationHeader'
import { DownloadResume } from 'src/components/DownloadResume'

export const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <NavigationHeader />
      <ConcentricCircles
        className={styles.top_left_circle}
        circularGap={65}
        size={440}
      />
      <section className={styles.info}>
        <div className={styles.about}>
          <div className={styles.text}>Hello! I am</div>
          <div className={styles.name}>
            <span className={styles.underline}>Devesh</span> <span>Sharma</span>
          </div>
        </div>
        <p className={styles.brief_skills}>
          UI Developer specialized in web development in ReactJS and related
          technologies
        </p>
        <div className={styles.resume}>
          <DownloadResume />
        </div>
      </section>
    </div>
  )
}
