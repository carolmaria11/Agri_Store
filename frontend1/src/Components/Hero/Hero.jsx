import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/Frontend_Assets/arrow.png';

const Hero = () => {
  return (
    <div className='hero'>
      {/* Black Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-left">
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
          </div>
          <p>Arrivals For</p>
          <p>Thriving Harvest</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
