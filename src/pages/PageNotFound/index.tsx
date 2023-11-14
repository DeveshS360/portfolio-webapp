import { PageHeader } from 'src/components/PageHeader'

export const PageNotFound = () => {
  return (
    <PageHeader
      title="Page Not Found"
      redirectionRoute="/"
      redirectionPage="Home"
      currPage="404"
    />
  )
}
