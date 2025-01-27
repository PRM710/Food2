import React from 'react'
import Logo from '../components/Logo'
import '../styles/Dishes.css'
import pan from '../images/Pan.png'
import ooti from '../images/ooti2.jpg'
import pork from '../images/pork2.jpg'
import thamla from '../images/thamla2.jpg'
import chicken from '../images/chicken2.jpg'
import { Link } from 'react-router-dom'


function Dishes() {
  return (
    <div>
      <Logo/>
    <div className='dishes--4'>
        <h2>Dishes - 4</h2>
    <div className='dish--grid'>

      <Link to='/dishes/ooti'>
     <div className='ooti--grid'>
       <img src={ooti} alt="Ooti.jpg" /> 
     </div>
     </Link>

    
     <Link to='/dishes/thamlapork'>
     <div className='thamla--grid'>
       <img src={thamla} alt="Thamla Pork.jpg" />
       </div>
       </Link>

       <Link to='/dishes/chicken'>
     <div className='chicken--grid'>
       <img src={chicken} alt="Chicken.jpg" />
       </div>
       </Link>

       <Link to='/dishes/nagastylepork'>
     <div className='naga--grid'>
       <img src={pork} alt="Naga Style Pork.jpg" />         
       </div>
       </Link>


    </div>
    <img src={pan} alt="" className='pan--img'/>

    </div>
    </div>
  )
}

export default Dishes
