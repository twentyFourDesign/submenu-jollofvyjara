import React from 'react'
import './style.css'
import headerImage from '../../image/bg.jpg'
import image from '../../image/Jollof by Jara 1.png'

const Header = () => {
  return (
    <div className='header'>
      {/* <div className="headerimgcontainer">
        <img src={headerImage} alt="" className='headerimg' />
      </div> */}
      <div className='logo-container'>
        <a href="https://www.jollofbyjara.com/catering" target='_blank'>
          <img src={image} alt="" className='logo' />
        </a>
      </div>

      {/* <div className='header-text'>
        <h1>Menu for external event catering </h1>
        <a href="http://www.jollofbyjara.com" target='_blank'>
          <button>Ask our team if you’d like suggestions!</button>
        </a>
      </div> */}
    </div>
  )
}

export default Header
