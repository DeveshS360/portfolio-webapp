import { useState } from 'react'
import styles from './index.module.scss'
import { EmbeddedVideo } from '../EmbeddedVideo'
import { WORK_SAMPLE_VIDEO_SOURCE } from 'src/constants/common'
import { WorkSampleVideoProps } from './types'

export const WorkSampleVideo = (props: WorkSampleVideoProps) => {
  const [showVideo, setShowVideo] = useState(false)

  const { isDisplayTitle = true } = props

  return (
    <>
      <div className={styles.work_sample_video}>
        <button className={styles.round_btn} onClick={() => setShowVideo(true)}>
          <span className={styles.icon}></span>
        </button>
        {isDisplayTitle && <span className={styles.text}>Watch Video</span>}
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
