import { ComponentProps } from 'react'

export interface EmbeddedVideoProps extends ComponentProps<'iframe'> {
  showVideo: boolean
  setShowVideo: (_: boolean) => void
}
