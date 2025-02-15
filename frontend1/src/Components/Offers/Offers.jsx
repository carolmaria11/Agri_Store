import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png'

const Offers = () => {
  return (
    
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive Offers</h1>
                <h1>For You Farmers</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={"/offer2.png"} alt="" />
            </div>
        </div>
    
  )
}

export default Offers