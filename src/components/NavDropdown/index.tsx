import { NavDropdownProps } from './types'
import styles from './index.module.scss'
import cx from 'classnames'

export const NavDropdown = (props: NavDropdownProps) => {
  const { items, visible } = props
  return (
    <ul className={cx(styles.nav_dropdown, { [styles.visible]: !!visible })}>
      {items?.map((dropdownItem) => {
        const { key, label } = dropdownItem
        return (
          <li key={key} className={styles.dropdown_item}>
            {label}
          </li>
        )
      })}
    </ul>
  )
}
