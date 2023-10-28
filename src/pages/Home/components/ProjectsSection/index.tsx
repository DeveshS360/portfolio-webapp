import roundBtnStyles from 'src/components/SocialHandle/index.module.scss'
import layoutStyles from '../ClientServices/index.module.scss'
import styles from './index.module.scss'
import cx from 'classnames'
import { useState } from 'react'
import { ProjectsCarousel } from 'src/components/ProjectsCarousel'
import { NavOptions } from 'src/components/ProjectsCarousel/types'

export const ProjectSection = () => {
  const [activeItem, setActiveItem] = useState(0)

  const items = new Array(8).fill(null)

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
