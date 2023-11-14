import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { ScrollToTopButton } from './components/ScrollToTopButton'
import { AppRoutes } from './constants/routes'
import { AboutMe } from './pages/AboutMe'
import { PageNotFound } from './pages/PageNotFound'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${AppRoutes.aboutMe}`} element={<AboutMe />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <ScrollToTopButton />
    </>
  )
}
