import { GithubFilled, LinkedinFilled } from '@ant-design/icons'
import { ConcentricCircles } from '../ConcentricCircles'
import { SocialHandle } from '../SocialHandle'
import styles from './index.module.scss'

export const SocialSection = () => {
  return (
    <aside className={styles.social_section}>
      <div className={styles.image_section}>
        <ConcentricCircles
          className={styles.circles}
          circularGap={60}
          size={440}
        >
          <div className={styles.social_icons_container}>
            <SocialHandle Icon={LinkedinFilled} />
            <SocialHandle Icon={GithubFilled} />
          </div>
        </ConcentricCircles>
      </div>
    </aside>
  )
}
