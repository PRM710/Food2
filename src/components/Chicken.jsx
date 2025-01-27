import React from 'react';
import '../styles/Chicken.css';
import chicken from '../images/chicken3.jpg';
import Logo from '../components/Logo';

function Chicken() {
  const handleOrderClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'https://wa.me/919833001027';
    } else {
      window.open('https://www.instagram.com/direct/t/17847224382319784', '_blank');
    }
  };

  return (
    <div>
      <Logo />
      <div className="chicken">
        <img src={chicken} alt="Chicken Dish" />
        <h3>Chicken</h3>
        <p className="chicken--para">
          A fusion of different traditional recipes with my own unique flair,
          delivering a mouthwatering and aromatic feast.
        </p>

        <button className="chicken--order--button" onClick={handleOrderClick}>
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Chicken;
