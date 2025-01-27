import React from 'react'
import '../styles/Naga.css'
import naga from '../images/pork3.jpg'
import Logo from '../components/Logo'

function Naga() {
  return (
    <div>
      <Logo/>
    <div className='naga'>
      <img src={naga} alt="" />
      <h3>Naga Styled Pork</h3>
      <p className='naga--para'>A flavour bomb where
         juicy pork collides with explosive
          Naga chillies, slow cooked to perfection.</p>
                
                 <button className='naga--order--button'>
          <a href="https://www.instagram.com/its_d_kitchen/" target='_blank'>
            Order Now
            </a>
          </button>
    </div> 
    </div>
  )
}

export default Naga
