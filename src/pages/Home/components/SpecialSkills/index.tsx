import { Meter } from 'src/components/Meter'
import styles from './index.module.scss'
import layoutStyles from '../ClientServices/index.module.scss'
import cx from 'classnames'
import { DownloadResume } from 'src/components/DownloadResume'

export const SpecialSkills = () => {
  return (
    <div className={cx(styles.special_skills, layoutStyles.client_services)}>
      <div className={cx(layoutStyles.container, styles.content_wrapper)}>
        <div className={styles.left}>
          <div className={styles.text_section}>
            <span className={cx(layoutStyles.title, layoutStyles.pipe)}>
              ||
            </span>
            <span className={layoutStyles.title}>My Skills</span>
          </div>
          <div className={layoutStyles.heading}>My top technical skills.</div>
          <DownloadResume />
        </div>
        <div className={styles.right}>
          <Meter field="ReactJS" percentage={95} />
          <Meter field="HTML" percentage={70} />
          <Meter field="CSS" percentage={80} />
          <Meter field="Javascript" percentage={95} />
          <Meter field="Typescript" percentage={75} />
        </div>
      </div>
    </div>
  )
}
