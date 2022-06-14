import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAsyncData from "../../../hooks/useAsyncData";
import Arrow from "../../../assets/images/Vector.png";
import "./styles.css";
import Snippet from "../../snippet";

const News = () => {
  const { data, isLoading } = useAsyncData(
    "/CompanyAPI/GetAllPublishNews?culture=en"
  );

  if (isLoading) return <Snippet />;
  return (
    <section className="news">
      <div className="container">
        <div>
          {data?.map((news) => (
            <div key={news.id}>
              <img
                src={`https://u1634535.plsk.regruhosting.ru/images/news/${news.image}`}
              />
              <p className="news_title">{news.name}</p>
              <p className="news_subtitle">{news.shortDesc}</p>

              <Link to={`/news/${news.id}`}>
                <div className="more_news_wrapper">
                  <p className="more_news"> Read more</p>
                  <img src={Arrow} alt="" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
