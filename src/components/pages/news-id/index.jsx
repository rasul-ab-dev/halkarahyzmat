import React from "react";
import useAsyncData from "../../../hooks/useAsyncData";
import { useParams } from "react-router-dom";
import "./styles.css";

const NewsId = () => {
  const { id } = useParams();

  const { data } = useAsyncData(`CompanyAPI/GetNewsPage/${id}?culture=en`);
  return (
    <div className="news_id">
      <div className="container">
        <div>
          {/* {data?.map((newsPage) => (
            <img
              src={`https://u1634535.plsk.regruhosting.ru/images/news/${newsPage.image}`}
              alt=""
            />
          ))} */}
          <p className="test_news">{data?.title}</p>
          <p className="short_descrip">{data?.shortDesc}</p>
          <img 
            src={`https://u1634535.plsk.regruhosting.ru/images/news/${data?.image}`}
            alt=""
          />
          <p className="description">{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsId;
