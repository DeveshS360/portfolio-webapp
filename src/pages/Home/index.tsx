import { ClientServices } from './components/ClientServices'
import { Introduction } from './components/Introduction'
import { SpecialSkills } from './components/SpecialSkills'

export const Home = () => {
  return (
    <>
      <Introduction />
      <ClientServices />
      <SpecialSkills />
    </>
  )
}
