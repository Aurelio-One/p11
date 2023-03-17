import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo_footer.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <NavLink to='/'>
          <img
            src={logo}
            alt='Kasa logo'
          />
        </NavLink>
        <p>© {new Date().getFullYear()}  Kasa. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
