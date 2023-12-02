import styles from './index.module.scss'
import { SocialHandleProps } from './types'
import { useState } from 'react'
import cx from 'classnames'
import { useDeviceWidth } from 'src/utils/viewport'

export const SocialHandle = (props: SocialHandleProps) => {
  const { Icon, redirectionUrl, className } = props

  const { isMobile } = useDeviceWidth()

  const hoverColor = 'var(--bg-color-primary)'
  const initialColor = 'var(--text-color-primary)'

  const [color, setColor] = useState(initialColor)

  const onHover = () => setColor(hoverColor)
  const onHoverLeave = () => setColor(initialColor)

  return (
    <button
      className={cx(styles.social, className)}
      onMouseEnter={onHover}
      onMouseLeave={onHoverLeave}
      onClick={() => {
        redirectionUrl && window.open(redirectionUrl)
      }}
    >
      <Icon style={{ color, fontSize: isMobile ? 15 : 20 }} />
    </button>
  )
}
