import buttonStyles from '../NavigationHeader/index.module.scss'
import styles from './index.module.scss'
import cx from 'classnames'

export const DownloadResume = () => {
  return (
    <button className={cx(styles.get_resume, buttonStyles.cta)}>
      <a
        href="/assets/Devesh_Sharma_Resume.pdf"
        download="Devesh_Sharma_Resume.pdf"
      >
        Get Resume
      </a>
    </button>
  )
}
