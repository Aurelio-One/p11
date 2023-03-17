import { useState } from 'react'
import './Dropdown.css'
import arrow from '../../assets/img/arrow.png'

function Dropdown({ title, content }) {
  const [isShown, setIsShown] = useState(false)

  function handleDropdown() {
    setIsShown(!isShown)
  }

  return (
    <div className='dropdown'>
      <button
        type='button'
        className='dropdown-button'
        onClick={handleDropdown}
      >
        {title}
        <img
          src={arrow}
          alt='dropdown arrow'
          className={`dropdown-arrow ${isShown ? 'up' : ''}`}
        />
      </button>
      <div className={`dropdown-content ${isShown ? 'visible' : ''}`}>
        {Array.isArray(content) ? (
          <ul className='dropdown-list'>
            {content.map((equipment, i) => (
              <li
                key={i}
                className='dropdown-list-item'
              >
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className='dropdown-text'>{content}</p>
        )}
      </div>
    </div>
  )
}

export default Dropdown
