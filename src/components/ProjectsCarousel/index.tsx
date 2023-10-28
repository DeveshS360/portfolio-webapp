import styles from './index.module.scss'
import { ProjectsCarouselProps } from './types'

export const ProjectsCarousel = (props: ProjectsCarouselProps) => {
  const { activeItem, itemList } = props

  console.log(activeItem, 'checking')

  return (
    <div className={styles.projects_carousel}>
      <div
        style={{
          transform: `translateX(-${activeItem * 50}%) translateX(-${
            activeItem * 30
          }px)`,
          transition: 'all 1s ease-out',
        }}
        className={styles.container}
      >
        {itemList.map((_, idx) => {
          return (
            <div key={idx} className={styles.item}>
              <div className={styles.square_box}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
