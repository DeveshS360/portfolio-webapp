import { ServiceCard } from 'src/components/ServiceCard'
import styles from './index.module.scss'
import cx from 'classnames'
import { CAROUSEL_DATA } from 'src/constants/common'

export const ClientServices = () => {
  return (
    <section className={styles.client_services}>
      <div className={styles.container}>
        <div>
          <span className={cx(styles.title, styles.pipe)}>||</span>
          <span className={styles.title}>My Services</span>
        </div>
        <div className={styles.heading}>Service Provided For My Clients.</div>
        <div className={styles.cards_container}>
          {CAROUSEL_DATA.map((data, idx) => (
            <ServiceCard key={idx} cardData={data} />
          ))}
        </div>
      </div>
    </section>
  )
}
