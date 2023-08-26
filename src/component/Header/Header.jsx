import React from 'react'
import './style.css'
import headerImage from '../../image/header.png'
import image from '../../image/Jollof by Jara 1.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={headerImage} alt="" className='headerimg'/>
      <div className='logo-container'>
        <img src={image} alt="" className='logo' />
      </div>

      <div className='header-text'>
        <h1>Menu for external event catering </h1>
        <p>(24hrs notice required)</p>
        <a href="http://www.jollofbyjara.com" target='_blank'>
          <button>Ask our team if you’d like suggestions!</button>
        </a>
      </div>
    </div>
  )
}

export default Header
