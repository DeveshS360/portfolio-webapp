import { useDeviceWidth } from 'src/utils/viewport'
import { ProjectCard } from './ProjectCard'
import styles from './index.module.scss'
import { ProjectsCarouselProps } from './types'

export const ProjectsCarousel = (props: ProjectsCarouselProps) => {
  const { activeItem, itemList } = props

  const { isMobileOrTablet } = useDeviceWidth()

  return (
    <div className={styles.projects_carousel}>
      <div
        style={{
          transform: `translateX(-${
            activeItem * (isMobileOrTablet ? 100 : 50)
          }%) translateX(-${activeItem * (isMobileOrTablet ? 50 : 25)}px)`,
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
