import { NavDrawerProps } from './types'
import cx from 'classnames'
import styles from './index.module.scss'
import { CloseOutlined } from '@ant-design/icons'

export const NavDrawer = (props: NavDrawerProps) => {
  const { isOpen, onClose } = props

  const iconStyle = { color: 'var(--text-color-primary', fontSize: 24 }

  return (
    <section className={cx(styles.nav_drawer, { [styles.visible]: isOpen })}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.drawer}>
        <button className={styles.close}>
          <CloseOutlined style={iconStyle} />
        </button>
      </div>
    </section>
  )
}
