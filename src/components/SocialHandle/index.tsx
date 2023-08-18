import styles from './index.module.scss'
import { SocialHandleProps } from './types'
import { useState } from 'react'

export const SocialHandle = (props: SocialHandleProps) => {
  const { Icon, redirectionUrl } = props

  const hoverColor = 'var(--bg-color-primary)'
  const initialColor = 'var(--text-color-primary)'

  const [color, setColor] = useState(initialColor)

  const onHover = () => setColor(hoverColor)
  const onHoverLeave = () => setColor(initialColor)

  return (
    <button
      className={styles.social}
      onMouseEnter={onHover}
      onMouseLeave={onHoverLeave}
      onClick={() => {
        redirectionUrl && window.open(redirectionUrl)
      }}
    >
      <Icon style={{ color, fontSize: 20 }} />
    </button>
  )
}
