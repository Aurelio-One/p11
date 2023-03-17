import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../../pages/Header/Header'
import Footer from '../../pages/Footer/Footer'
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Housing from '../../pages/Housing/Housing'
import NotFound from '../../pages/NotFound/NotFound'

function Router() {
  return (
    <BrowserRouter>
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
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
