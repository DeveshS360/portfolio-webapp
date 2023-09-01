import styles from './index.module.scss'
import navLogo from 'assets/images/nav-logo.svg'
import cursiveBg from 'assets/images/cursive.png'
import { Nav_Items } from './constants'
import { useEffect, useRef } from 'react'
import cx from 'classnames'

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
        <div className={styles.logo_section}>
          <img width={55} src={navLogo} alt="nav-logo" />
          <span>Desmache</span>
        </div>
        <div className={styles.container}>
          {Nav_Items.map((item) => (
            <span key={item.name}>
              {item.label}{' '}
              <img
                className={styles.cursive}
                src={cursiveBg}
                alt="cursive-bg"
              />
            </span>
          ))}
        </div>
        <button className={styles.cta}>Hire Me </button>
      </nav>
    </>
  )
}
