import { PageHeader } from 'src/components/PageHeader'
import { AppRoutes } from 'src/constants/routes'
import { Introduction } from './components/Introduction'

export const AboutMe = () => {
  return (
    <>
      <PageHeader
        title="About Me"
        redirectionPage="Home"
        redirectionRoute={`${AppRoutes.home}`}
        currPage="About"
      />
      <Introduction />
    </>
  )
}
