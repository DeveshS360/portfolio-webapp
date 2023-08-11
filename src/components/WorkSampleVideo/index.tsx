import { useState } from 'react'
import styles from './index.module.scss'
import { EmbeddedVideo } from '../EmbeddedVideo'

export const WorkSampleVideo = () => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      <div className={styles.work_sample_video}>
        <button className={styles.round_btn}>
          <span className={styles.icon}></span>
        </button>
        <span className={styles.text}>Watch Work Sample Video</span>
      </div>
      <EmbeddedVideo showVideo={showVideo} src="" />
    </>
  )
}
