import { NavDropdownProps } from './types'
import styles from './index.module.scss'
import cx from 'classnames'
import { useNavigate } from 'react-router-dom'
import { scrollToTop } from 'src/utils/viewport'

export const NavDropdown = (props: NavDropdownProps) => {
  const navigate = useNavigate()

  const handleNavigation = (route: string) => {
    if (route) {
      navigate(route)
      scrollToTop()
    }
  }
  const { items, visible } = props
  return (
    <ul className={cx(styles.nav_dropdown, { [styles.visible]: !!visible })}>
      {items?.map((dropdownItem) => {
        const { key, label, route } = dropdownItem
        return (
          <li
            key={key}
            className={styles.dropdown_item}
            onClick={() => handleNavigation(route)}
          >
            {label}
          </li>
        )
      })}
    </ul>
  )
}
