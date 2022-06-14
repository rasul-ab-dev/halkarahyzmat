import React from "react";
import useAsyncData from "../../../hooks/useAsyncData";
import { Link } from "react-router-dom";
import "./styles.css";
import ContactUs from "../../contact_us/contact_us";
import Snippet from "../../snippet";

const Products = () => {
  const { data, isLoading } = useAsyncData(
    "/ProductAPI/GetAllPublishProduct?culture=ru"
  );
  if (isLoading) return <Snippet />;
  return (
    <section className="products">
      <div className="container">
        <div>
          {data?.map((prod) => (
            <Link key={prod.productId} to={`/products/${prod.productId}`}>
              <div className="products_api_wrapper">
                <img
                  className="products_img"
                  src={`https://u1634535.plsk.regruhosting.ru/images/service/${prod.image}`}
                />
                <p className="products_name">{prod.name}</p>
                <p className="products_descrip">{prod.shortDesc}</p>
              </div>
            </Link>
          ))}
        </div>
        <ContactUs />
      </div>
    </section>
  );
};

export default Products;
