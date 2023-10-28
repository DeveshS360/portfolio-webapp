import roundBtnStyles from 'src/components/SocialHandle/index.module.scss'
import layoutStyles from '../ClientServices/index.module.scss'
import styles from './index.module.scss'
import cx from 'classnames'

export const ProjectSection = () => {
  return (
    <div className={cx(layoutStyles.client_services, styles.project_section)}>
      <div className={layoutStyles.container}>
        <div className={styles.navigation}>
          <div>
            <div className={styles.text_section}>
              <span className={cx(layoutStyles.title, layoutStyles.pipe)}>
                ||
              </span>
              <span className={layoutStyles.title}>Awesome Portfolio</span>
            </div>
            <div className={layoutStyles.heading}>My Projects</div>
          </div>
          <div className={styles.nav_btn_container}>
            <button
              className={cx(roundBtnStyles.social, styles.nav_cta, styles.left)}
            />
            <button className={cx(roundBtnStyles.social, styles.nav_cta)} />
          </div>
        </div>
      </div>
    </div>
  )
}
