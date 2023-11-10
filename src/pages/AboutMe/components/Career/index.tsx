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
      <div className={styles.content}>
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
    </section>
  )
}
