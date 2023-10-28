import roundBtnStyles from 'src/components/SocialHandle/index.module.scss'
import layoutStyles from '../ClientServices/index.module.scss'
import styles from './index.module.scss'
import cx from 'classnames'
import { useState } from 'react'
import { ProjectsCarousel } from 'src/components/ProjectsCarousel'
import { NavOptions } from 'src/components/ProjectsCarousel/types'
import projectImg from 'assets/images/sportia.png'
import projectBg1 from 'assets/images/dummy_project1.webp'
import projectBg2 from 'assets/images/dummy_project2.webp'
import projectBg3 from 'assets/images/dummy_project3.webp'
import projectBg4 from 'assets/images/dummy_project4.webp'

export const ProjectSection = () => {
  const [activeItem, setActiveItem] = useState(0)

  const items = [
    {
      projectImg,
      backgroundImg: projectBg1,
    },
    {
      projectImg,
      backgroundImg: projectBg2,
    },
    {
      projectImg,
      backgroundImg: projectBg3,
    },
    {
      projectImg,
      backgroundImg: projectBg4,
    },
  ]

  const handleNavigation = (action: NavOptions) => {
    if (action === NavOptions.prev && activeItem > 0)
      setActiveItem((prev) => prev - 1)
    else if (action === NavOptions.next && activeItem < items.length - 2)
      setActiveItem((prev) => prev + 1)
  }

  return (
    <div className={cx(layoutStyles.client_services, styles.project_section)}>
      <div className={layoutStyles.container}>
        <div className={styles.navigation}>
          <div>
            <div className={styles.text_section}>
              <span className={cx(layoutStyles.title, layoutStyles.pipe)}>
                ||
              </span>
              <span className={layoutStyles.title}>Awesome Portfolio</span>
            </div>
            <div className={layoutStyles.heading}>My Projects</div>
          </div>
          <div className={styles.nav_btn_container}>
            <button
              onClick={() => handleNavigation(NavOptions.prev)}
              className={cx(roundBtnStyles.social, styles.nav_cta, styles.left)}
            />
            <button
              onClick={() => handleNavigation(NavOptions.next)}
              className={cx(roundBtnStyles.social, styles.nav_cta)}
            />
          </div>
        </div>
        <ProjectsCarousel activeItem={activeItem} itemList={items} />
      </div>
    </div>
  )
}
