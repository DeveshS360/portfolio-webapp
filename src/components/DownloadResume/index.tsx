import buttonStyles from '../NavigationHeader/index.module.scss'
import styles from './index.module.scss'
import cx from 'classnames'

export const DownloadResume = () => {
  return (
    <a href="Devesh_Sharma_Resume.pdf" download="Devesh_Sharma_Resume.pdf">
      <button className={cx(styles.get_resume, buttonStyles.cta)}>
        Get Resume
      </button>
    </a>
  )
}
