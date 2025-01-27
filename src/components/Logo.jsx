import React from 'react'
import logo from '../images/logo.png'
import '../styles/Logo.css'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    
    <header className='logo--header'>
      <Link to='/'>
      <img src={logo} alt="Logo.png" className='logo'/>
      </Link>
      
         
    </header>
  )
}

export default Logo
