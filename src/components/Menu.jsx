import React from 'react'
import menulogo from '../images/menulogo.png'
import '../styles/Menu.css'

function Menu() {
  return (
   <div className='menu'>
            <h4>See our menu</h4>
              <img src={menulogo}/>
   </div>
  )
}

export default Menu
