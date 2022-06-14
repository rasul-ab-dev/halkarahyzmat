import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import DropDown from "../drop_down";
import "./burger.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="burger-menu">
      <div
        className={`lines-wrapper ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="burger-line first"></span>
        <span className="burger-line second"></span>
        <span className="burger-line third"></span>
      </div>
      <div className={`mobile-navbar ${isOpen ? "show" : ""}`}>
        <nav className="mobile-navbar-nav">
          <div onClick={() => setIsOpen(false)}>
            <NavLink className="navbar-nav-link" to="/">
              Main
            </NavLink>
          </div>
          {/* <div onClick={() => setIsOpen(false)}> */}
          {/* <NavLink className="navbar-nav-link" to="/company">
              Company
            </NavLink> */}
          {/* <DropDown/> */}
          {/* </div> */}
          <ul className="drop_down_menu">
            <li className="drop_down_hover">
              <a className="burger_drop_down_link" href="#">
                Company
              </a>
              <ul className="burger_drop_down_list">
                <li>
                  <NavLink className="burger_subitems" to="/about_us_page">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="burger_subitems" to="/news">
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink className="burger_subitems" to="/licenses">
                    Licenses
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <div onClick={() => setIsOpen(false)}>
            <NavLink className="navbar-nav-link" to="/services">
              Services
            </NavLink>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <NavLink className="navbar-nav-link" to="/products">
              Products
            </NavLink>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <NavLink className="navbar-nav-link" to="/projects">
              Projects
            </NavLink>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <NavLink className="navbar-nav-link" to="/FAQ">
              FAQ
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
