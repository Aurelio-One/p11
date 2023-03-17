import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <NavLink to='/'>
        <img
          src={logo}
          alt='Kasa logo'
        />
      </NavLink>
      <nav className='nav'>
        <NavLink
          to='/'
          className='Link'
        >
          Accueil
        </NavLink>
        <NavLink
          to='/about'
          className='Link'
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
