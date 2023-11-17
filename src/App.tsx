import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { ScrollToTopButton } from './components/ScrollToTopButton'
import { AppRoutes } from './constants/routes'
import { AboutMe } from './pages/AboutMe'
import { PageNotFound } from './pages/PageNotFound'
import { FAQ } from './pages/FAQ'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${AppRoutes.aboutMe}`} element={<AboutMe />} />
        <Route path={`${AppRoutes.faq}`} element={<FAQ />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <ScrollToTopButton />
    </>
  )
}
