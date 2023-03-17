import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Housing from '../../pages/Housing/Housing'
import NotFound from '../../pages/NotFound/NotFound'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='housing'
          element={<Housing />}
        />
        <Route
          path='about'
          element={<About />}
        />
        <Route
          path='housing/:housingId'
          element={<Housing />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
