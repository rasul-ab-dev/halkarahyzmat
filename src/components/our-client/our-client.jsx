import React from "react";
import useAsyncData from "../../hooks/useAsyncData.jsx";
import Snippet from "../snippet/index.jsx";
import "./our-client.css";

const OurClient = () => {
  const { data, isLoading } = useAsyncData("/ClientAPI/");
  if (isLoading) return <Snippet />;
  // console.log(data);
  return (
    <div className="our_client">
      <div className="container">
        <div className="our_client_title">Our clients</div>

        {data?.data.map((client) => (
          <div className="logo_wrapper" key={client.id}>
            <img
              src={`https://u1634535.plsk.regruhosting.ru/images/client/${client.logo}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClient;
