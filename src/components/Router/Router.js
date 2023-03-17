import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import About from '../About/About'
import Housing from '../Housing/Housing'
import NotFound from '../NotFound/NotFound'

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
