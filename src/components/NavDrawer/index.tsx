import { NavDrawerProps } from './types'
import cx from 'classnames'
import styles from './index.module.scss'
import { CloseOutlined } from '@ant-design/icons'
import { Nav_Items } from 'src/constants/navigation'
import { NavItem } from '../NavItem'

export const NavDrawer = (props: NavDrawerProps) => {
  const { isOpen, onClose } = props

  const iconStyle = { color: 'var(--text-color-primary', fontSize: 18 }

  return (
    <section className={cx(styles.nav_drawer, { [styles.visible]: isOpen })}>
      <div className={styles.overlay} onClick={onClose} />
      <aside className={styles.drawer}>
        <button className={styles.close} onClick={onClose}>
          <CloseOutlined style={iconStyle} />
        </button>
        <div className={styles.nav_items}>
          {Nav_Items.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </div>
      </aside>
    </section>
  )
}
