import { ConcentricCircles } from 'src/components/ConcentricCircles'
import styles from './index.module.scss'
import { NavigationHeader } from 'src/components/NavigationHeader'
import { DownloadResume } from 'src/components/DownloadResume'
import { WorkSampleVideo } from 'src/components/WorkSampleVideo'
import { SocialSection } from 'src/components/SocialSection'
import { useDeviceWidth } from 'src/utils/viewport'

export const Introduction = () => {
  const { isSmallDesktop, isMobileOrTablet } = useDeviceWidth()

  return (
    <section className={styles.introduction}>
      <NavigationHeader />
      {!isMobileOrTablet && (
        <ConcentricCircles
          className={styles.top_left_circle}
          circularGap={isSmallDesktop ? 55 : 65}
          size={440}
        />
      )}
      <div className={styles.main}>
        {isMobileOrTablet && <SocialSection />}
        <section className={styles.info}>
          <div className={styles.about}>
            <div className={styles.text}>Hello! I am</div>
            <div className={styles.name}>
              <span className={styles.underline}>Devesh</span>{' '}
              <span>Sharma</span>
            </div>
          </div>
          <p className={styles.brief_skills}>
            UI Developer specialized in web development in ReactJS and related
            technologies.
          </p>
          <div className={styles.resume}>
            <DownloadResume />
          </div>
          <WorkSampleVideo />
        </section>
        {!isMobileOrTablet && <SocialSection />}
      </div>
      {!isMobileOrTablet && (
        <ConcentricCircles
          className={styles.bottom_left_circle}
          circularGap={isSmallDesktop ? 55 : 65}
          size={440}
        />
      )}
    </section>
  )
}
