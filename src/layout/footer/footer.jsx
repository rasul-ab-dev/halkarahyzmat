import React from "react";
import FooterLogo from "../../assets/images/white-logo.png";
import PhoneIcon from "../../assets/images/phone-icon.png";
import MailIcon from "../../assets/images/mail-icon.png";
import LocationIcon from "../../assets/images/location-icon.png";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_body">
          <div>
            <img className="footer_logo" src={FooterLogo} alt="" />
          </div>
          <div className="footer_info_wrapper">
            <div className="footer_info">Company</div>
            <div className="footer_list">
              <NavLink className="footer_link" to="/about_us_page">
                About us
              </NavLink>
              <NavLink className="footer_link" to="/news">
                News
              </NavLink>
              <NavLink className="footer_link" to="/licenses">
                Licenses
              </NavLink>
              <NavLink className="footer_link" to="/projects">
                Projects
              </NavLink>
            </div>
          </div>
          <div className="footer_info_wrapper">
            <div className="footer_info">Services</div>
            <div className="footer_list">
              <NavLink className="footer_link" to="/services">
                Logistic Solutions
              </NavLink>
              <NavLink className="footer_link" to="/services">
                International Trade
              </NavLink>
            </div>
          </div>
          <div className="footer_info_wrapper">
            <div className="footer_info">Products</div>
            <div className="footer_list">
              <NavLink className="footer_link" to="/products">
                Granular urea
              </NavLink>
            </div>
          </div>
          <div className="footer_info_wrapper">
            <div className="footer_info">FAQ</div>
            <div className="footer_list">
              <a className="footer_link text-dect" href="#">
                How to buy?
              </a>
            </div>
          </div>

          <div className="footer_info_wrapper">
            <div className="footer_info">Contact</div>
            <div className="footer_contact_wrapper">
              <div className="footer_contact_list">
                <div className="footer_icon">
                  <img src={PhoneIcon} alt="" />
                </div>
                <div className="our_contacts">
                  <a href="tel: Tel:+99312477672" className="contacts_item">
                    Tel: +99312477672
                  </a>
                  <a href="tel:Fax: +99312477523" className="contacts_item">
                    Fax: +99312477523
                  </a>
                </div>
              </div>
            </div>
            <div className="footer_contact_wrapper">
              <div className="footer_contact_list">
                <div className="footer_icon">
                  <img src={MailIcon} alt="" />
                </div>
                <div className="our_contacts">
                  <a href="mailto:info@hyzmat.at" className="contacts_item">
                    info@hyzmat.at
                  </a>
                </div>
              </div>
            </div>
            <div className="footer_contact_wrapper">
              <div className="footer_contact_list">
                <div className="footer_icon">
                  <img src={LocationIcon} alt="" />
                </div>
                <div className="our_contacts">
                  <div className="contacts_item">
                    Paytagt Shopping Center,
                    <br /> block "C", floor1, Ashgabat, <br /> Turkmenistan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
