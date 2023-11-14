import { PageHeader } from 'src/components/PageHeader'
import styles from './index.module.scss'
import { Footer } from 'src/components/Footer'
import notFoundImage from 'assets/images/404-error.webp'

export const PageNotFound = () => {
  return (
    <section className={styles.page_not_found}>
      <PageHeader
        title="Page Not Found"
        redirectionPage="Home"
        redirectionRoute="/"
        currPage="404"
      />
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title}>Sorry!</h1>
          <h2 className={styles.subtitle}>This Page is Not Found.</h2>
          <p className={styles.description}>
            The page you're looking for does not exist or seems to be down. We
            request you to please check the URL once again or else try again
            after sometime!
          </p>
        </div>
        <div className={styles.astronaut}>
          <img width={'100%'} src={notFoundImage} />
        </div>
      </div>
      <Footer />
    </section>
  )
}
