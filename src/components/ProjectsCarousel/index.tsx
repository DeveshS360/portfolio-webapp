import { ProjectCard } from './ProjectCard'
import styles from './index.module.scss'
import { ProjectsCarouselProps } from './types'

export const ProjectsCarousel = (props: ProjectsCarouselProps) => {
  const { activeItem, itemList } = props

  return (
    <div className={styles.projects_carousel}>
      <div
        style={{
          transform: `translateX(-${activeItem * 50}%) translateX(-${
            activeItem * 25
          }px)`,
          transition: 'all 1s ease-out',
        }}
        className={styles.container}
      >
        {itemList.map((item, idx) => {
          const { projectImg, backgroundImg, projectUrl, title } = item
          return (
            <ProjectCard
              key={idx}
              projectImg={projectImg}
              backgroundImg={backgroundImg}
              projectUrl={projectUrl}
              title={title}
            />
          )
        })}
      </div>
    </div>
  )
}
