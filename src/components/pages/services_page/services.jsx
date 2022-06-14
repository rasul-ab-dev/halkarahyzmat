import React, { useEffect, useState } from "react";
import useAsyncData from "../../../hooks/useAsyncData";
import ContactUs from "../../contact_us/contact_us";
import ProductsSection from "../../products_section";
import Snippet from "../../snippet";
// import ServicesSection from "../../services-section";
import "./services.css";

const ServicesPage = () => {
  const { data, isLoading, isError } = useAsyncData(
    "ServiceAPI/GetAllPublishService"
  );
  if (isLoading) return <Snippet />;
  // const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section className="services_page">
      <div className="container">
        <div>
          {data?.map((service) => (
            <div className="services_wrapper">
              <img
                src={`https://u1634535.plsk.regruhosting.ru/images/service/${service.image}`}
              />
              <div className="services_descrip_wrapper">
                <p className="services_name">{service.name}</p>
                <p className="services_descrip">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="other_products">Other products & services</p>
        <div className="dublicate_wrapper">
          <ProductsSection />
          {data?.map((service) => (
            <div className="services_dublicate">
              <img
                src={`https://u1634535.plsk.regruhosting.ru/images/service/${service.image}`}
              />
              <div className="dublicate_descrip_wrapper">
                <p className="dublicate_name">{service.name}</p>
                <p className="dublicate_descrip">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactUs />
    </section>
  );
};

export default ServicesPage;
