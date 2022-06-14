import React, { useEffect, useState } from "react";
import CardsIcon from "../../assets/images/cards-icon.png";
import useApi from "../../hooks/useApi";
import useAsyncData from "../../hooks/useAsyncData";
import Snippet from "../snippet";
import "./choose_us.css";

const ChooseUs = () => {
  const { data, isLoading, isError } = useAsyncData("/MissionAPI?culture=ru");
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const api = useApi()
  // const [mission, setMission] = useState([])

  // useEffect(() => {
  //   async function getData() {
  //     const { data } = await api.get('/MissionAPI?culture=ru')
  //     setMission(data)
  //   }
  //   getData()
  // }, [])

  if (isError) return <div>error happend</div>;

  if (isLoading) return <Snippet />;

  return (
    <section className="choose_us">
      <div className="container">
        <p className="choose_us_title">Why choose Us</p>
        <div className="cards_wrapper">
          {data?.map((mission, idx) => (
            <div
              onClick={() => setSelectedIndex(idx)}
              className={`choose_us_card ${
                idx === selectedIndex ? "active-mission" : ""
              }`}
              key={mission?.id}
            >
              <div>
                <img className="card_icon" src={CardsIcon} alt="" />
              </div>
              <span className="icon_text">{mission?.name} </span>
            </div>
          ))}
        </div>

        <div className="cards_content">
          {data?.length && (
            <div
              dangerouslySetInnerHTML={{
                __html: data[selectedIndex]?.description,
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
