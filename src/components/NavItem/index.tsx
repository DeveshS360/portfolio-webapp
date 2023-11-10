import { useState } from 'react'
import { NavDropdown } from '../NavDropdown'
import styles from './index.module.scss'
import { NavItemProps } from './types'
import cursiveBg from 'assets/images/cursive.png'
import { useNavigate } from 'react-router-dom'

export const NavItem = (props: NavItemProps) => {
  const [isDropDownVisible, setIsDropdownVisible] = useState(false)

  const openDropdown = () => setIsDropdownVisible(true)
  const closeDropdown = () => setIsDropdownVisible(false)

  const { dropdownItems, label, route } = props

  const navigate = useNavigate()

  const handleNavigation = () => {
    if (route && !dropdownItems?.length) navigate(route)
  }
  return (
    <span
      className={styles.nav_item}
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
      onClick={handleNavigation}
    >
      {label}{' '}
      <img className={styles.cursive} src={cursiveBg} alt="cursive-bg" />
      {!!dropdownItems?.length && (
        <NavDropdown items={dropdownItems} visible={isDropDownVisible} />
      )}
    </span>
  )
}
