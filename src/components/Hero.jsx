import React from "react";
import "./css/Hero.css";
import HeroImage from "../images/hero-image.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="text-content">
          <div className="top-side">
            <span>75% SAVE</span>
            <span>For the Black Friday weekend</span>
          </div>
          <p>Fastest & secure platform to invest in crypto</p>
          <p>
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
          <button>Try for FREE</button>
        </div>
        <div className="image-content">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
