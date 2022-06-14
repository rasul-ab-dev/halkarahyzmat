import React from "react";
import AboutUsImage from "../../../assets/images/about-us.png";
import "./styles.css";

const AboutUsPage = () => {
  return (
    <section className="about_us_page">
      <div className="top_block">
        <p className="block_title">About us</p>
        <p className="block_subtitle">Our visions, missions and goals</p>
      </div>
      <div className="container">
        <div className="about_us_page_wrapper">
          <img className="about_us_page_img" src={AboutUsImage} alt="" />
          <div className="about_us_page_text">
            <p className="about_us_page_title">About Us</p>
            <p className="about_us_page_content">
              The economic company "Halkara Hyzmat", translated as
              "International Services", is a company founded by young
              professionals in the field of trade and transportation of
              petrochemical goods from Turkmenistan to the countries of the near
              abroad and Europe. Despite the fact that the company is still
              young, we can boast of our specialists, who have extensive and
              long-term experiences in these fields. That is why we can offer
              you a big range consulting service as well. Our goal is to
              interact and attract foreign clients / investors to the
              export-rich Turkmenistan market. The main activity of the company
              is assistance (consulting) in the purchase of goods produced in
              Turkmenistan (registration of foreign companies on the State
              Commodity and Raw Materials Exchange of Turkmenistan, execution of
              the necessary client documentation, participation in tenders on
              behalf of the client, purchase of goods in the client’s name,
              clearance of customs documentation) and transport services to the
              client’s destination. Thus, the main activities of our company are
              divided into three parts: trade, logistics and consulting
              services. Turkmenistan is a strategically important country for
              trade in petrochemical goods at the expense of its rich gas
              fields. Turkmenistan is one of the leading countries in Central
              Asia in the production and export of mineral fertilizers, such as
              urea, sulfur, ammonia and potassium. The complete list of goods of
              Turkmen origin ready to be exported can be found on the official
              website of the State Commodity and Raw Materials Exchange of
              Turkmenistan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
