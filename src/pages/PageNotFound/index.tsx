import { PageHeader } from 'src/components/PageHeader'
import styles from './index.module.scss'
import { Footer } from 'src/components/Footer'

export const PageNotFound = () => {
  return (
    <section className={styles.page_not_found}>
      <PageHeader
        title="Page Not Found"
        redirectionPage="Home"
        redirectionRoute="/"
        currPage="404"
      />
      <div className={styles.content}></div>
      <Footer />
    </section>
  )
}
