import { GoogleMapLocation } from 'src/components/GoogleMapLocation'
import { PageHeader } from 'src/components/PageHeader'
import styles from './index.module.scss'
import { CONTACT_WAYS } from 'src/constants/contact'
import { Footer } from 'src/components/Footer'
import { SocialHandle } from 'src/components/SocialHandle'
import {
  FACEBOOK_URL,
  GITHUB_URL,
  INSTA_URL,
  LINKEDIN_URL,
} from 'src/constants/common'
import {
  FacebookFilled,
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
} from '@ant-design/icons'

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
        <section className={styles.follow_me}>
          <h2 className={styles.heading}>Follow Me</h2>
          <div className={styles.socials}>
            <SocialHandle
              className={styles.link}
              Icon={LinkedinFilled}
              redirectionUrl={LINKEDIN_URL}
            />
            <SocialHandle
              className={styles.link}
              Icon={GithubFilled}
              redirectionUrl={GITHUB_URL}
            />
            <SocialHandle
              className={styles.link}
              Icon={InstagramFilled}
              redirectionUrl={INSTA_URL}
            />
            <SocialHandle
              className={styles.link}
              Icon={FacebookFilled}
              redirectionUrl={FACEBOOK_URL}
            />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
