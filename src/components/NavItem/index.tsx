import { useState } from 'react'
import { NavDropdown } from '../NavDropdown'
import styles from './index.module.scss'
import { NavItemProps } from './types'
import cursiveBg from 'assets/images/cursive.png'

export const NavItem = (props: NavItemProps) => {
  const [isDropDownVisible, setIsDropdownVisible] = useState(false)

  const openDropdown = () => setIsDropdownVisible(true)
  const closeDropdown = () => setIsDropdownVisible(false)

  const { dropdownItems, label } = props
  return (
    <span
      className={styles.nav_item}
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      {label}{' '}
      <img className={styles.cursive} src={cursiveBg} alt="cursive-bg" />
      <NavDropdown items={dropdownItems} visible={isDropDownVisible} />
    </span>
  )
}
