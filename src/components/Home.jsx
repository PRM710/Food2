import React from 'react'
import '../styles/Home.css'
import chef from '../images/chef3.png'
import Menu from './Menu'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>   
         <Logo/>
    <div className='home'>
      <img src={chef} alt=""/>
      <p className='title'>
            In my kitchen, every dish is a love letter
            to your taste buds
          </p>
          <p className='para'>
            — no ready mades,
            just pure homemade goodness.
            Each order is our priority and is carefully crafted like our own
            craving, ensuring that your hunger is not just met, but pampered.
          </p>
          <Link to='/dishes'>
          <Menu/>
          </Link>
    </div>
    </div>
  )
}

export default Home
