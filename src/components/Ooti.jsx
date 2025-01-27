import React from 'react'
import '../styles/Ooti.css'
import ooti from '../images/ooti3.jpg'
import Logo from './Logo'

function Ooti() {
  return (
    <div>
      <Logo/>
    <div className='ooti'>
      <img src={ooti} alt="" />
      <h3>Ooti</h3>
      <p className='ooti--para'>A comfort, fuss-free 
                 dish where tender peas
                 soak up rich flavours,
                 perfect for any quick meal.</p>
                
                 <button className='ooti--order--button'>
          <a href="https://www.instagram.com/its_d_kitchen/" target='_blank'>
            Order Now
            </a>
          </button>
    </div>
    </div>
  )
}

export default Ooti

