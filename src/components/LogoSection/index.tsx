import styles from './index.module.scss'
import navLogo from 'assets/images/nav-logo.svg'

export const LogoSection = () => {
  return (
    <div className={styles.logo_section}>
      <img src={navLogo} alt="nav-logo" />
      <span>Desmache</span>
    </div>
  )
}
