import styles from './index.module.scss'
import { Nav_Items } from '../../constants/navigation'
import { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { LogoSection } from '../LogoSection'
import { NavItem } from '../NavItem'
import { AppRoutes } from 'src/constants/routes'
import { MenuFoldOutlined } from '@ant-design/icons'
import { useDeviceWidth } from 'src/utils/viewport'
import { NavDrawer } from '../NavDrawer'

export const NavigationHeader = () => {
  const navRef = useRef<HTMLElement>(null)
  const placeHolderNavRef = useRef<HTMLElement>(null)

  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false)

  const closeNavDrawer = () => setIsNavDrawerOpen(false)
  const openNavDrawer = () => setIsNavDrawerOpen(true)

  const menuIconStyle = {
    color: 'var(--text-color-primary',
    fontSize: 25,
    cursor: 'pointer',
  }

  const { isMobileOrTablet } = useDeviceWidth()

  const handleScroll = () => {
    if (!placeHolderNavRef.current || !navRef.current) return

    const scrollPos = window.scrollY
    if (scrollPos > 50) {
      navRef.current.classList.add(styles.scroll)
      placeHolderNavRef.current.classList.remove(styles.hidden)
    } else {
      navRef.current.classList.remove(styles.scroll)
      placeHolderNavRef.current.classList.add(styles.hidden)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getPlaceHolderNav = () => {
    if (isMobileOrTablet) return null
    return (
      <nav
        ref={placeHolderNavRef}
        className={cx(styles.place_holder_nav, styles.hidden)}
      />
    )
  }

  const getNavContentExcludingLogo = () => {
    if (!isMobileOrTablet)
      return (
        <>
          <div className={styles.container}>
            {Nav_Items.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </div>
          <a className={styles.cta} href={AppRoutes.contactMe}>
            Hire Me{' '}
          </a>
        </>
      )
    return <MenuFoldOutlined style={menuIconStyle} onClick={openNavDrawer} />
  }

  return (
    <>
      {getPlaceHolderNav()}
      <nav ref={navRef} className={styles.navigation_header}>
        <LogoSection />
        {getNavContentExcludingLogo()}
      </nav>
      <NavDrawer isOpen={isNavDrawerOpen} onClose={closeNavDrawer} />
    </>
  )
}
