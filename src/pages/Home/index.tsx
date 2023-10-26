import { ClientServices } from './components/ClientServices'
import { Introduction } from './components/Introduction'
import { MetricsSection } from './components/MetricsSection'
import { SpecialSkills } from './components/SpecialSkills'

export const Home = () => {
  return (
    <>
      <Introduction />
      <ClientServices />
      <SpecialSkills />
      <MetricsSection />
    </>
  )
}
