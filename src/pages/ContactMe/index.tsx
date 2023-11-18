import { GoogleMapLocation } from 'src/components/GoogleMapLocation'
import { PageHeader } from 'src/components/PageHeader'
import styles from './index.module.scss'
import { CONTACT_WAYS } from 'src/constants/contact'
import { Footer } from 'src/components/Footer'

export const ContactMe = () => {
  return (
    <div className={styles.contact_me}>
      <PageHeader title="Contact Me" currPage="Contact" />
      <div className={styles.content}>
        <section>
          <GoogleMapLocation />
        </section>
        <section className={styles.contact_ways}>
          {CONTACT_WAYS.map((contact) => {
            const { key, value } = contact
            return (
              <div key={key} className={styles.card}>
                <div className={styles.title}>{key}:</div>
                <p className={styles.subtitle}>{value}</p>
              </div>
            )
          })}
        </section>
      </div>
      <Footer />
    </div>
  )
}
