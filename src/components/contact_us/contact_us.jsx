import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import ContactPhone from "../../assets/images/contact-phone.png";
import ContactMail from "../../assets/images/contact-mail.png";
import ContactLocation from "../../assets/images/contact-location.png";
import "./contact_us.css";

const ContactUs = () => {
  return (
    <section className="contact_us" id="contact">
      <div className="container">
        <div className="contact_us_body">
          <div className="input_wrapper">
            <div className="contact_title">Contact us</div>
            <input type="text" placeholder="Company" className="input" />
            <input
              type="text"
              placeholder="Nature of Bussiness"
              className="input"
            />
            <div className="double_input">
              <input
                type="text"
                placeholder="Adress"
                className="input adress"
              />
              <input
                type="number"
                placeholder="Postcode"
                className="input post_code"
              />
            </div>
            <input type="text" placeholder="Contact name" className="input" />
            <input
              type="number"
              placeholder="Contact phone"
              className="input"
            />
            <input
              type="mail"
              placeholder="email@gmail.com"
              className="input"
            />
            <input
              type="text"
              placeholder="Let's talk about your idea"
              className="input"
            />
            <input className="file_input" type="file" />
            <div className="submit_btn_wrapper">
              <button className="submit_btn">Submit</button>
            </div>
          </div>
          <div className="contact_info_wrapper">
            <div className="contact_info">
              <div>
                <img className="phone_icon" src={ContactPhone} alt="" />
              </div>
              <div className="contact_info_items">
                <a href="tel:Tel: +99312477672" className="item">
                  Tel: +99312477672
                </a>
                <a href="tel:Fax: +99312477672" className="item">
                  Fax: +99312477523
                </a>
              </div>
            </div>
            <div className="contact_info">
              <div>
                <img className="mail_icon" src={ContactMail} alt="" />
              </div>
              <div className="contact_info_items">
                <a href="mailto:info@hyzm.at" className="item">
                  info@hyzm.at
                </a>
              </div>
            </div>
            <div className="contact_info">
              <div>
                <img className="location_icon" src={ContactLocation} alt="" />
              </div>
              <div className="contact_info_items">
                <div className="item">
                  Paytagt Shopping Center,
                  <br /> block "C",
                  <br /> floor 1, Ashgabat,
                  <br />
                  Turkmenistan
                </div>
              </div>
            </div>
            <div className="contact_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.547232627429!2d58.387671714720604!3d37.89426991304964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f70017ff850f285%3A0x75626ca1a277a6dd!2sHalkara%20Hyzmat!5e0!3m2!1sru!2suk!4v1652430409786!5m2!1sru!2suk"
                width="600"
                height="450"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
