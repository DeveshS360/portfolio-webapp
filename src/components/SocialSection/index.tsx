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
import { IS_SMALL_DESKTOP } from 'src/constants/screen'

export const SocialSection = () => {
  return (
    <aside className={styles.social_section}>
      <img className={styles.hero} src={heroImgUrl} alt="hero" />
      <ConcentricCircles
        className={styles.circles}
        circularGap={60}
        size={IS_SMALL_DESKTOP ? 300 : 400}
        boldIdx={2}
      >
        <div className={styles.social_icons_container}>
          <SocialHandle Icon={LinkedinFilled} redirectionUrl={LINKEDIN_URL} />
          <SocialHandle Icon={GithubFilled} redirectionUrl={GITHUB_URL} />
          <SocialHandle Icon={InstagramFilled} redirectionUrl={INSTA_URL} />
          <SocialHandle Icon={FacebookFilled} redirectionUrl={FACEBOOK_URL} />
        </div>
      </ConcentricCircles>
    </aside>
  )
}
