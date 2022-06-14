import React from "react";
import { NavLink } from "react-router-dom";
import AboutUsImage from "../../assets/images/about-us.png";
import AboutUsIcon from "../../assets/images/Vector.png";
import "./about_us_main.css";

const AboutUs = () => {
  return (
    <section className="about_us">
      <div className="container">
        <div className="about_us_wrapper">
          <img className="about_us_img" src={AboutUsImage} alt="" />
          <div className="about_us_text">
            <p className="about_us_title">About Us</p>
            <p className="about_us_content">
              The economic company "Halkara Hyzmat", translated as
              "International Services", is a company founded by young
              professionals in the field of trade and transportation of
              petrochemical goods from Turkmenistan to the countries of the near
              abroad and Europe. Despite the fact that the company is still
              young, we can boast of our specialists, who have extensive and
              long-term experiences in these fields. That is why we can offer
              you a big range consulting service as well.
            </p>
            <div className="more_about_us">
              <NavLink className="more_about_us_link" to="/about_us_page">
                More about us
              </NavLink>
              <img src={AboutUsIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
