import { useState } from 'react'
import styles from './index.module.scss'
import cx from 'classnames'
import { scrollToTop, useWindowScroll } from 'src/utils/viewport'
import { UpOutlined } from '@ant-design/icons'

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (!window.scrollY) setIsVisible(false)
    else if (!isVisible) setIsVisible(true)
  }
  useWindowScroll(handleScroll)

  const iconStyle = {
    fontSize: 18,
    color: 'var(--text-color-primary)',
    transform: 'scaleX(1.2)',
  }

  return (
    <button
      className={cx(styles.scroll_top_btn, {
        [styles.visible]: isVisible,
      })}
      onClick={scrollToTop}
    >
      <UpOutlined style={iconStyle} />
    </button>
  )
}
