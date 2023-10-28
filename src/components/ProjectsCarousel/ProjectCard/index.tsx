import styles from './index.module.scss'
import { ProjectCardProps } from './types'

export const ProjectCard = (props: ProjectCardProps) => {
  const { backgroundImg, projectImg, projectUrl, title } = props

  const handleRedirection = () => {
    window.open(projectUrl)
  }

  return (
    <div className={styles.project_card}>
      <div className={styles.img_container} onClick={handleRedirection}>
        <div className={styles.square_box} />
        <img src={backgroundImg} className={styles.faded_pic} />
        <img src={projectImg} className={styles.project_pic} />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  )
}
