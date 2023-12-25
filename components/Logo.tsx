import React from 'react'
import logo from './images/logo.png'
import './logo.css'
const Logo = () => {
  return (
    <div>
      <img className='logoimg' src={logo.src} alt="logo" />
    </div>
  )
}

export default Logo
