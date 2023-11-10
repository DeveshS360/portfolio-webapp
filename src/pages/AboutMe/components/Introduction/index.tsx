import layoutStyles from 'src/pages/Home/components/Introduction/index.module.scss'
import styles from './index.module.scss'
import cx from 'classnames'
import { WorkSampleVideo } from 'src/components/WorkSampleVideo'
import { DownloadResume } from 'src/components/DownloadResume'

export const Introduction = () => {
  return (
    <div className={cx(layoutStyles.introduction, styles.introduction)}>
      <div className={cx(styles.info, styles.main)}>
        <div className={styles.media_section}>
          <WorkSampleVideo isDisplayTitle={false} />
          <DownloadResume />
        </div>
        <div className={styles.text_section}>
          <div className={styles.heading}>I'm Devesh Sharma</div>
          <div className={styles.sub_heading}>
            UI Developer specialized in web development in ReactJS and related
            technologies.
          </div>
          <div className={styles.description}>
            Dedicated UI Developer with over 2 years of extensive hands-on
            experience, specializing in HTML, CSS, JavaScript, TypeScript, and
            ReactJS. Adept at swiftly mastering emerging technologies and
            excelling in the development of intricate UI applications.
          </div>
        </div>
      </div>
    </div>
  )
}
