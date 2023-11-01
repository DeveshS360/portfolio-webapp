import roundBtnStyles from 'src/components/SocialHandle/index.module.scss'
import layoutStyles from '../ClientServices/index.module.scss'
import styles from './index.module.scss'
import cx from 'classnames'
import { useState } from 'react'
import { ProjectsCarousel } from 'src/components/ProjectsCarousel'
import { NavOptions } from 'src/components/ProjectsCarousel/types'
import sportsDasboardImg from 'assets/images/sports-dashboard.png'
import portfolioWebAppImg from 'assets/images/portfolio-webapp.png'
import ticTacToeImg from 'assets/images/tic-tac-toe.png'
import projectBg1 from 'assets/images/dummy_project1.webp'
import projectBg2 from 'assets/images/dummy_project2.webp'
import projectBg3 from 'assets/images/dummy_project3.webp'
import { PROJECT_URLS } from 'src/constants/projects'

export const ProjectSection = () => {
  const [activeItem, setActiveItem] = useState(0)

  const PROJECT_URL1 = 'https://sports-dashboard-desmache.netlify.app/'
  const PROJECT_URL2 = 'https://portfolio-desmache.netlify.app/'
  const PROJECT_URL3 = 'https://portfolio-desmache.netlify.app/'
  const items = [
    {
      projectImg: sportsDasboardImg,
      backgroundImg: projectBg1,
      projectUrl: PROJECT_URLS.sportsDashboard,
      title: 'Sports Dashboard',
    },
    {
      projectImg: ticTacToeImg,
      backgroundImg: projectBg3,
      projectUrl: PROJECT_URLS.ticTacToe,
      title: 'Tic Tac Toe Game',
    },
    {
      projectImg: portfolioWebAppImg,
      backgroundImg: projectBg2,
      projectUrl: PROJECT_URLS.portfolioWebApp,
      title: 'Portfolio Desmache',
    },
  ]

  const handleNavigation = (action: NavOptions) => {
    if (action === NavOptions.prev && activeItem > 0)
      setActiveItem((prev) => prev - 1)
    else if (action === NavOptions.next && activeItem < items.length - 2)
      setActiveItem((prev) => prev + 1)
  }

  const checkIfDisabled = (action: NavOptions) => {
    if (action === NavOptions.prev && activeItem === 0) return true
    if (action === NavOptions.next && activeItem === items.length - 2)
      return true
    return false
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
              className={cx(
                roundBtnStyles.social,
                styles.nav_cta,
                styles.left,
                { [styles.disabled]: checkIfDisabled(NavOptions.prev) }
              )}
            />
            <button
              onClick={() => handleNavigation(NavOptions.next)}
              className={cx(roundBtnStyles.social, styles.nav_cta, {
                [styles.disabled]: checkIfDisabled(NavOptions.next),
              })}
            />
          </div>
        </div>
        <ProjectsCarousel activeItem={activeItem} itemList={items} />
      </div>
    </div>
  )
}
