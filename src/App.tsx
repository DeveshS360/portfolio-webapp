import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { ScrollToTopButton } from './components/ScrollToTopButton'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollToTopButton />
    </>
  )
}
