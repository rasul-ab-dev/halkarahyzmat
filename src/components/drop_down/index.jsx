import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const DropDown = () => {
  return (
    <section className="drop_down">
      <ul className="drop_down_menu">
        <li className="drop_down_hover">
          <div className="drop_down_link">Company</div>
          <ul className="drop_down_list">
            <li>
              <NavLink className="subitems" to="/about_us_page">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink className="subitems" to="/news">
                News
              </NavLink>
            </li>
            <li>
              <NavLink className="subitems" to="/licenses">
                Licenses
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default DropDown;
