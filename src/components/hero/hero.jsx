import React from "react";
import { NavLink } from "react-router-dom";
import HeroImage from "../../assets/images/hero-image.jpg";
import "./hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_text">
            <p className="hero_title">
              Worldwide trade of high quality commodities from Turkmenistan
            </p>
            <NavLink to="/products">
              <button className="hero_button">Find Products</button>
            </NavLink>
          </div>
          <div className="hero_img">
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
