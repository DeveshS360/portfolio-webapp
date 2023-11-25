import { ConcentricCircles } from '../ConcentricCircles'
import { NavigationHeader } from '../NavigationHeader'
import layoutStyles from 'src/pages/Home/components/Introduction/index.module.scss'
import styles from './index.module.scss'
import { PageHeaderProps } from './types'
import cx from 'classnames'
import { AppRoutes } from 'src/constants/routes'
import { useDeviceWidth } from 'src/utils/viewport'

export const PageHeader = (props: PageHeaderProps) => {
  const { isSmallDesktop } = useDeviceWidth()
  const {
    title,
    redirectionPage = 'Home',
    redirectionRoute = AppRoutes.home,
    currPage,
  } = props

  return (
    <div className={cx(layoutStyles.introduction, styles.page_header)}>
      <ConcentricCircles
        className={layoutStyles.top_left_circle}
        circularGap={isSmallDesktop ? 55 : 65}
        size={700}
      />
      <NavigationHeader />
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.pages_capsule}>
            <a className={styles.redirection_link} href={redirectionRoute}>
              {redirectionPage}
            </a>
            <span className={styles.pipe}>||</span>
            <span>{currPage}</span>
          </div>
        </div>
      </div>
      <ConcentricCircles
        className={cx(layoutStyles.bottom_left_circle, styles.bottom_circle)}
        circularGap={isSmallDesktop ? 55 : 65}
        size={700}
      />
    </div>
  )
}
