import { ServiceCard } from 'src/components/ServiceCard'
import styles from './index.module.scss'
import cx from 'classnames'
import { Carousel } from 'src/components/Carousel'
import { CAROUSEL_DATA } from 'src/constants'

export const ClientServices = () => {
  return (
    <div className={styles.client_services}>
      <div className={styles.container}>
        <div>
          <span className={cx(styles.title, styles.pipe)}>||</span>
          <span className={styles.title}>My Services</span>
        </div>
        <div className={styles.heading}>Service Provide For My Clients.</div>
        <Carousel countInFrame={3}>
          {CAROUSEL_DATA.map((data, idx) => (
            <ServiceCard key={idx} cardData={data} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}
