import React from "react";
import useAsyncData from "../../../hooks/useAsyncData";
import Snippet from "../../snippet";
import "./styles.css";

const Licenses = () => {
  const { data, isLoading } = useAsyncData(
    "CompanyAPI/GetAllPublishLicense?culture=en"
  );
  if (isLoading) return <Snippet />;
  return (
    <div className="licenses">
      <div className="container">
        <div>
          {data?.map((license) => (
            <>
              <p className="license_title">{license.title}</p>
              <img
                src={`https://u1634535.plsk.regruhosting.ru/images/license/${license.file}`}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Licenses;
