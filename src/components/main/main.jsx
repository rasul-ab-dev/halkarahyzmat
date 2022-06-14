import React from "react";
import HeroSection from "../hero/hero.jsx";
import AboutUs from "../about_us_main/about_us_main.jsx";
import ChooseUs from "../choose_us/choose_us.jsx";
import ContactUs from "../contact_us/contact_us.jsx";
import OurClient from "../our-client/our-client.jsx";
import ProductsSection from "../products_section";
import ServicesSection from "../services-section";
import "./main.css";

const Main = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ChooseUs />
      <ProductsSection />
      <ServicesSection />
      <OurClient />
      <ContactUs />
    </>
  );
};

export default Main;
