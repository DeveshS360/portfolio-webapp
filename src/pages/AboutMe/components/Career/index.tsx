import layoutStyles from 'src/pages/Home/components/Introduction/index.module.scss'
import styles from './index.module.scss'
import cx from 'classnames'
import { CareerTypes } from './types'
import { useState } from 'react'
import { EXPERTISE_DETAILS } from '../../../../constants/career'

export const Career = () => {
  const [expertise, setExpertise] = useState(CareerTypes.experience)

  const handleExpertiseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement

    if (target.name && target.name !== expertise)
      setExpertise(target.name as CareerTypes)
  }

  return (
    <section className={cx(layoutStyles.introduction, styles.career)}>
      <div className={styles.toggle_exptertise}>
        <div className={styles.btn_container}>
          <button
            className={cx(styles.expertise, {
              [styles.selected]: expertise === CareerTypes.experience,
            })}
            name={CareerTypes.experience}
            onClick={handleExpertiseClick}
          >
            Experience
          </button>
          <button
            className={cx(styles.expertise, {
              [styles.selected]: expertise === CareerTypes.education,
            })}
            name={CareerTypes.education}
            onClick={handleExpertiseClick}
          >
            Education
          </button>
        </div>
      </div>
      <div key={expertise} className={styles.chronology_container}>
        {EXPERTISE_DETAILS[expertise].map((entity) => {
          const { title, subtitle, start, end, description } = entity
          return (
            <div className={styles.chronology}>
              <div className={styles.timeline}>
                <h6 className={styles.duration}>
                  {start} - {end}
                </h6>
              </div>
              <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <h3 className={styles.subtitle}>{subtitle}</h3>
                <p className={styles.description}>{description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
