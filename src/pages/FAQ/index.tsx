import { PageHeader } from 'src/components/PageHeader'
import styles from './index.module.scss'
import { FAQ_LIST } from 'src/constants/faq'
import { FaqCard } from 'src/components/FaqCard'
import { Footer } from 'src/components/Footer'

export const FAQ = () => {
  return (
    <div className={styles.faq}>
      <PageHeader title="FAQs" currPage="FAQs" />
      <section className={styles.content}>
        {FAQ_LIST.map((faq) => (
          <FaqCard {...faq} />
        ))}
      </section>
      <Footer />
    </div>
  )
}
