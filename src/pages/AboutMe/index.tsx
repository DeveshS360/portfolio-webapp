import { PageHeader } from 'src/components/PageHeader'
import { Introduction } from './components/Introduction'
import { Career } from './components/Career'
import { MetricsSection } from '../Home/components/MetricsSection'
import { Footer } from 'src/components/Footer'

export const AboutMe = () => {
  return (
    <>
      <PageHeader title="About Me" currPage="About" />
      <Introduction />
      <Career />
      <MetricsSection />
      <Footer />
    </>
  )
}
