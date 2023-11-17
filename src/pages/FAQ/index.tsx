import { PageHeader } from 'src/components/PageHeader'
import styles from './index.module.scss'
import { AppRoutes } from 'src/constants/routes'
import { FAQ_LIST } from 'src/constants/faq'
import { FaqCard } from 'src/components/FaqCard'
import { Footer } from 'src/components/Footer'

export const FAQ = () => {
  return (
    <section className={styles.faq}>
      <PageHeader
        title="FAQ"
        currPage="FAQ"
        redirectionPage="Home"
        redirectionRoute={AppRoutes.home}
      />
      <div className={styles.content}>
        {FAQ_LIST.map((faq) => (
          <FaqCard {...faq} />
        ))}
      </div>
      <Footer />
    </section>
  )
}
