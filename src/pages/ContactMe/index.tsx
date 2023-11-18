import { GoogleMapLocation } from 'src/components/GoogleMapLocation'
import { PageHeader } from 'src/components/PageHeader'
import styles from './index.module.scss'

export const ContactMe = () => {
  return (
    <div className={styles.contact_me}>
      <PageHeader title="Contact Me" currPage="Contact" />
      <div className={styles.content}>
        <GoogleMapLocation />
      </div>
    </div>
  )
}
