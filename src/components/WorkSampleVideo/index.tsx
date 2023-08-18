import { useState } from 'react'
import styles from './index.module.scss'
import { EmbeddedVideo } from '../EmbeddedVideo'
import { WORK_SAMPLE_VIDEO_SOURCE } from 'src/constants'

export const WorkSampleVideo = () => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      <div className={styles.work_sample_video}>
        <button className={styles.round_btn} onClick={() => setShowVideo(true)}>
          <span className={styles.icon}></span>
        </button>
        <span className={styles.text}>Watch Work Sample Video</span>
      </div>
      <EmbeddedVideo
        showVideo={showVideo}
        setShowVideo={setShowVideo}
        src={WORK_SAMPLE_VIDEO_SOURCE}
        allowFullScreen
      />
    </>
  )
}
