import styles from './index.module.scss'
import { CarouselProps } from './types'

export const Carousel = (props: CarouselProps) => {
  const { children } = props

  return <div className={styles.carousel}>{children}</div>
}
