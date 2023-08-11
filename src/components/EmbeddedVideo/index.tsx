import { EmbeddedVideoProps } from './types'

export const EmbeddedVideo = (props: EmbeddedVideoProps) => {
  const { showVideo, src } = props

  if (!showVideo) return null

  return <iframe src={src} title="video"></iframe>
}
