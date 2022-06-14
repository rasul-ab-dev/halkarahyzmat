import React from "react";
import { useParams } from "react-router-dom";
import useAsyncData from "../../../hooks/useAsyncData";
import ContactUs from "../../contact_us/contact_us";
import Snippet from "../../snippet";
import "./styles.css";

const ProductId = () => {
  const { productId } = useParams();

  const { data, isLoading } = useAsyncData(
    `ProductAPI/GetProductPage/${productId}?culture=ru`
  );
  // debugger;
  // console.log(
  //   data?.optionDTO?.optionDetailDTOs?.map(
  //     (optionDetail) => optionDetail?.description
  //   )
  // );
  // console.log(data?.optionDTO.map(opDetail));
  if (isLoading) return <Snippet />;
  return (
    <section className="products_id">
      <div className="container">
        <div className="products_id_wrapper">
          <img
            className="products_img"
            src={`https://u1634535.plsk.regruhosting.ru/images/service/${data?.image}`}
          />
          <p className="products_name">{data?.name}</p>
          <p className="products_short_descrip">{data?.shortDesc}</p>
          <p className="products_title">Description</p>
          <p className="products_descrip">{data?.description}</p>
          <div>
            {data?.optionDTO.map((option) => (
              <div>
                <button className="option_btn">{option?.optionCode}</button>
                <div>
                  {option?.optionDetailDTOs?.map((optionDetail) => (
                    <div>
                      <div className="option_title">{optionDetail?.title}</div>
                      <div className="option_subtitle">
                        {optionDetail?.description}
                      </div>
                    </div>
                  ))}
                  <div className="request_btn_wrapper">
                    <button className="request_btn">Request the product</button>
                    <button className="download_btn">
                      Download specification
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {/* {data?.optionDTO?.optionDetailDTOs?.map((optionDetail) => (
              <p>{optionDetail?.description}</p>
            ))} */}
          </div>
        </div>
      </div>
      <ContactUs />
    </section>
  );
};

export default ProductId;
