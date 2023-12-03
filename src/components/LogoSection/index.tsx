import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import navLogo from 'assets/images/nav-logo.svg'
import { AppRoutes } from 'src/constants/routes'

export const LogoSection = () => {
  const navigate = useNavigate()
  return (
    <div
      className={styles.logo_section}
      onClick={() => navigate(AppRoutes.home)}
    >
      <img src={navLogo} alt="nav-logo" />
      <span>Desmache</span>
    </div>
  )
}
