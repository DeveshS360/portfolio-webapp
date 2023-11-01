import { HeartFilled } from '@ant-design/icons'
import { LogoSection } from '../LogoSection'
import styles from './index.module.scss'

export const Footer = () => {
  const iconStyle = { fontSize: 16, color: 'var(--text-color-primary)' }
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.secondary}>Made with lots of</span>{' '}
          <HeartFilled style={iconStyle} />{' '}
          <span className={styles.secondary}>&</span> <span>{'<React />'}</span>{' '}
          <span className={styles.secondary}>by</span> Devesh Sharma
        </div>
        <LogoSection />
      </div>
    </footer>
  )
}
