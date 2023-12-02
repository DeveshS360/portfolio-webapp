import {
  FacebookFilled,
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
} from '@ant-design/icons'
import { ConcentricCircles } from '../ConcentricCircles'
import { SocialHandle } from '../SocialHandle'
import styles from './index.module.scss'
import heroImgUrl from 'assets/images/web-app-hero.png'
import {
  FACEBOOK_URL,
  GITHUB_URL,
  INSTA_URL,
  LINKEDIN_URL,
} from 'src/constants/common'
import { useDeviceWidth } from 'src/utils/viewport'

export const SocialSection = () => {
  const { isSmallDesktop, isMobileOrTablet, isMobile } = useDeviceWidth()

  const getCircleSize = () => {
    if (isSmallDesktop) return 300
    if (isMobile) return 260
    if (isMobileOrTablet) return 360

    return 400
  }

  const getCircularGap = () => {
    if (isMobileOrTablet) return 0
    return 60
  }

  return (
    <section className={styles.social_section}>
      <img className={styles.hero} src={heroImgUrl} alt="hero" />
      <ConcentricCircles
        className={styles.circles}
        circularGap={getCircularGap()}
        size={getCircleSize()}
        boldIdx={2}
        style={{
          borderLeft: 'none',
          borderBottom: 'none',
        }}
      >
        <div className={styles.social_icons_container}>
          <SocialHandle Icon={LinkedinFilled} redirectionUrl={LINKEDIN_URL} />
          <SocialHandle Icon={GithubFilled} redirectionUrl={GITHUB_URL} />
          <SocialHandle Icon={InstagramFilled} redirectionUrl={INSTA_URL} />
          <SocialHandle Icon={FacebookFilled} redirectionUrl={FACEBOOK_URL} />
        </div>
      </ConcentricCircles>
    </section>
  )
}
