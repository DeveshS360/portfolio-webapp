import { useState } from 'react'
import { NavDropdown } from '../NavDropdown'
import styles from './index.module.scss'
import { NavItemProps } from './types'
import cursiveBg from 'assets/images/cursive.png'
import { useNavigate } from 'react-router-dom'
import { scrollToTop, useDeviceWidth } from 'src/utils/viewport'
import { RightOutlined } from '@ant-design/icons'
import { noop } from 'src/utils'
import cx from 'classnames'

export const NavItem = (props: NavItemProps) => {
  const [isDropDownVisible, setIsDropdownVisible] = useState(false)

  const { isMobileOrTablet } = useDeviceWidth()

  const openDropdown = () => setIsDropdownVisible(true)
  const closeDropdown = () => setIsDropdownVisible(false)

  const { dropdownItems, label, route } = props

  const navigate = useNavigate()

  const handleNavigation = () => {
    if (route && !dropdownItems?.length) {
      navigate(route)
      scrollToTop()
      return
    }
    if (isMobileOrTablet) setIsDropdownVisible((prev) => !prev)
  }

  const getLabel = () => {
    if (isMobileOrTablet) return label.toUpperCase()
    return label
  }

  const getDropdown = () => {
    if (!dropdownItems?.length) return
    return <NavDropdown items={dropdownItems} visible={isDropDownVisible} />
  }

  return (
    <>
      <div
        className={styles.nav_item}
        onMouseEnter={!isMobileOrTablet ? openDropdown : noop}
        onMouseLeave={!isMobileOrTablet ? closeDropdown : noop}
        onClick={handleNavigation}
      >
        {getLabel()}{' '}
        {isMobileOrTablet && !!dropdownItems?.length && (
          <RightOutlined
            className={cx(styles.right_arrow, {
              [styles.rotate]: isDropDownVisible,
            })}
          />
        )}
        {!isMobileOrTablet && (
          <>
            <img className={styles.cursive} src={cursiveBg} alt="cursive-bg" />
            {getDropdown()}
          </>
        )}
      </div>
      {isMobileOrTablet && getDropdown()}
    </>
  )
}
