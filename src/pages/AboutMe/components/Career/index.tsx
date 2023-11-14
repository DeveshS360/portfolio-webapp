import layoutStyles from 'src/pages/Home/components/Introduction/index.module.scss'
import styles from './index.module.scss'
import cx from 'classnames'
import { CareerTypes } from './types'
import { useState } from 'react'

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
      <div className={styles.chronology_container}>
        <div className={styles.chronology}>
          <div className={styles.timeline}>
            <h6 className={styles.duration}>2010 - 2012</h6>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Bachelor of Business Administration
            </h1>
            <h3 className={styles.subtitle}>
              University of California, Berkeley
            </h3>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been indus dard dummy text ever since
              the 1500 when an uniknown prnter took galley of type and scrambled
              make specimen book has not only five centuries the into
              electronic.
            </p>
          </div>
        </div>
        <div className={styles.chronology}>
          <div className={styles.timeline}>
            <h6 className={styles.duration}>2012 - 2016</h6>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Bachelor of Business Administration
            </h1>
            <h3 className={styles.subtitle}>
              University of California, Berkeley
            </h3>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been indus dard dummy text ever since
              the 1500 when an uniknown prnter took galley of type and scrambled
              make specimen book has not only five centuries the into
              electronic.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
