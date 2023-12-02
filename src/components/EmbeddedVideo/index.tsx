import { EmbeddedVideoProps } from './types'
import styles from './index.module.scss'
import cx from 'classnames'
import { useEffect } from 'react'
import { CloseOutlined } from '@ant-design/icons'

export const EmbeddedVideo = (props: EmbeddedVideoProps) => {
  const {
    showVideo,
    setShowVideo,
    width = '80%',
    height = 'auto',
    ...restProps
  } = props

  useEffect(() => {
    if (showVideo) document.body.classList.add('no-vertical-scroll')
    else document.body.classList.remove('no-vertical-scroll')
  }, [showVideo])

  return (
    <div
      className={cx(styles.overaly, { [styles.visible]: showVideo })}
      onClick={() => setShowVideo(false)}
    >
      <div className={styles.video_container}>
        <iframe
          onClick={(e) => {
            e.stopPropagation()
          }}
          className={styles.video}
          width={width}
          height={height}
          title="work-sample"
          {...restProps}
        />
      </div>
      <button className={styles.cross} onClick={() => setShowVideo(false)}>
        <CloseOutlined
          style={{ color: 'var(--text-color-primary', fontSize: 20 }}
        />
      </button>
    </div>
  )
}
