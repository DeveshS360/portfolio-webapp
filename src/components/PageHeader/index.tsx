import { IS_SMALL_DESKTOP } from 'src/constants/screen'
import { ConcentricCircles } from '../ConcentricCircles'
import { NavigationHeader } from '../NavigationHeader'
import layoutStyles from 'src/pages/Home/components/Introduction/index.module.scss'
import styles from './index.module.scss'
import { PageHeaderProps } from './types'
import cx from 'classnames'

export const PageHeader = (props: PageHeaderProps) => {
  const { title, redirectionPage, redirectionRoute, currPage } = props

  return (
    <div className={cx(layoutStyles.introduction, styles.page_header)}>
      <ConcentricCircles
        className={layoutStyles.top_left_circle}
        circularGap={IS_SMALL_DESKTOP ? 55 : 65}
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
        circularGap={IS_SMALL_DESKTOP ? 55 : 65}
        size={700}
      />
    </div>
  )
}
