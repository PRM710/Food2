import React from 'react'
import '../styles/Thamla.css'
import thamla from '../images/thamla3.jpg'
import Logo from './Logo'

function Thamla() {
  return (
    <div>
      <Logo/>
  
    <div className='thamla'>
      <img src={thamla} alt="" />
      <h3>Thamla Pork</h3>
      <p className='thamla--para'>This pork recipe has been 
                 unchanged for decades,
                  yet every Christmas,
                   the same irresistible craving 
                   that calls me back to
                   my Mum’s village.</p>
                
                 <button className='thamla--order--button'>
          <a href="https://www.instagram.com/its_d_kitchen/" target='_blank'>
            Order Now
            </a>
          </button>
    </div>
    </div>
  )
}

export default Thamla
