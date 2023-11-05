import styles from './index.module.scss'
import { Nav_Items } from './constants'
import { useEffect, useRef } from 'react'
import cx from 'classnames'
import { LogoSection } from '../LogoSection'
import { NavItem } from '../NavItem'

export const NavigationHeader = () => {
  const navRef = useRef<HTMLElement>(null)
  const placeHolderNavRef = useRef<HTMLElement>(null)

  const handleScroll = () => {
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

  return (
    <>
      <nav
        ref={placeHolderNavRef}
        className={cx(styles.place_holder_nav, styles.hidden)}
      />
      <nav ref={navRef} className={styles.navigation_header}>
        <LogoSection />
        <div className={styles.container}>
          {Nav_Items.map((item) => (
            <NavItem key={item.name} {...item}/>
          ))}
        </div>
        <button className={styles.cta}>Hire Me </button>
      </nav>
    </>
  )
}
