import React from "react";
import { NavLink } from "react-router-dom";
import useAsyncData from "../../hooks/useAsyncData";
import "./styles.css";

const ServicesSection = () => {
  const { data, isLoading } = useAsyncData("/ServiceAPI/GetAllPublishService");

  if (isLoading) return <div>Loading ...</div>;

  return (
    <section className="sevices">
      <div className="container">
        <div>
          <p className="sevices_title">Our services</p>

          <div>
            {/* {data?.map((s) => (
              <div className="service" key={s.id}>
                <NavLink className="sevices_link" to="/services">
                  {s.name}
                </NavLink>
              </div>
            ))} */}
            <div className="services_link_wrapper">
              <div className="line"></div>
              <NavLink className="services_link" to="/services">
                Logistic Solutions
              </NavLink>
              <div className="line"></div>
              <NavLink className="services_link" to="/services">
                International Trade
              </NavLink>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
