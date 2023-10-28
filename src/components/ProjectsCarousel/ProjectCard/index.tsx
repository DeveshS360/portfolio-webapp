import styles from './index.module.scss'
import { ProjectCardProps } from './types'

export const ProjectCard = (props: ProjectCardProps) => {
  const { backgroundImg, projectImg } = props
  return (
    <div className={styles.project_card}>
      <div className={styles.square_box} />
      <img src={backgroundImg} className={styles.faded_pic} />
      <img src={projectImg} className={styles.project_pic} />
    </div>
  )
}
