import { EmbeddedVideoProps } from './types'
import styles from './index.module.scss'
import cx from 'classnames'
import { useEffect } from 'react'

export const EmbeddedVideo = (props: EmbeddedVideoProps) => {
  const {
    showVideo,
    setShowVideo,
    width = '60%',
    height = 600,
    ...restProps
  } = props

  useEffect(() => {
    if (showVideo) document.body.classList.add('no-vertical-scroll')
    else document.body.classList.remove('no-vertical-scroll')
  }, [showVideo])

  return (
    <div className={cx(styles.overaly, { [styles.visible]: showVideo })}>
      <div className={styles.video_container}>
        <iframe
          className={styles.video}
          width={width}
          height={height}
          title="work-sample"
          {...restProps}
        />
      </div>
      <button className={styles.cross} onClick={() => setShowVideo(false)}>
        x
      </button>
    </div>
  )
}
