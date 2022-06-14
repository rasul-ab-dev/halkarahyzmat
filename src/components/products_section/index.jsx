import React from "react";
import useAsyncData from "../../hooks/useAsyncData";
import { Link } from "react-router-dom";
import "./styles.css";

const ProductsSection = () => {
  const { data, isLoading } = useAsyncData(
    "/ProductAPI/GetAllPublishProduct?culture=ru"
  );

  return (
    <section className="products">
      <div className="container">
        <div>
          {data?.map((prod) => (
            // <Link key={prod.productId} to={`/products/${prod.productId}`}>
            <Link key={prod.productId} to={`/products`}>
              <div className="products_wrapper">
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
      </div>
    </section>
  );
};

export default ProductsSection;
