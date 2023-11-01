import { Footer } from 'src/components/Footer'
import { ClientServices } from './components/ClientServices'
import { Introduction } from './components/Introduction'
import { MetricsSection } from './components/MetricsSection'
import { ProjectSection } from './components/ProjectsSection'
import { SpecialSkills } from './components/SpecialSkills'

export const Home = () => {
  return (
    <>
      <Introduction />
      <ClientServices />
      <SpecialSkills />
      <MetricsSection />
      <ProjectSection />
      <Footer />
    </>
  )
}
