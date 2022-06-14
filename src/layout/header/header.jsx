import React from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../../components/burger-menu/burger.jsx";
import DropDown from "../../components/drop_down/index.jsx";
import Logo from "../../components/logo/logo.jsx";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_wrapper">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <nav className="navbar">
            <NavLink className="navbar_link text-decoration-none" to="/">
              Main
            </NavLink>
            <DropDown />
            <NavLink className="navbar_link" to="/services">
              Services
            </NavLink>
            <NavLink className="navbar_link" to="/products">
              Products
            </NavLink>
            <NavLink className="navbar_link " to="/projects">
              Projects
            </NavLink>
            <NavLink className="navbar_link" to="/FAQ">
              FAQ
            </NavLink>
          </nav>
          <div className="button_wrapper">
            <a href="#contact">
              <button className="header_button">Contact</button>
            </a>
            <p className="languages">EN</p>
          </div>
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
