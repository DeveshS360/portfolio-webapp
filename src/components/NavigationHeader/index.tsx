import styles from './index.module.scss'
import navLogo from 'assets/images/nav-logo.svg'
import cursiveBg from 'assets/images/cursive.png'
import { Nav_Items } from './constants'

export const NavigationHeader = () => {
  return (
    <nav className={styles.navigation_header}>
      <div className={styles.logo_section}>
        <img width={55} src={navLogo} alt="nav-logo" />
        <span>Desmache</span>
      </div>
      <div className={styles.container}>
        {Nav_Items.map((item) => (
          <span key={item.name}>
            {item.label}{' '}
            <img className={styles.cursive} src={cursiveBg} alt="cursive-bg" />
          </span>
        ))}
      </div>
      <button className={styles.cta}>Hire Me </button>
    </nav>
  )
}
