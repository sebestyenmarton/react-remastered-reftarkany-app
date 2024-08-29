import React, { useEffect, useState } from "react";

import Navbar from "../../navbar/navbar";
import { routingConfiguration } from "../../../service/WebUrlMapper";
import "./home-page.scss";
import axios from "axios";
import urls from "../../../service/ApplicationHttpClient";
import ChirchAnimation from "../../screens/second-screen/chirch-animation/chirch-animation";
import { IDevotion } from "../../../typings/global";
import SecondScreen from "../../screens/second-screen/second-screen";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const [devotion, setDevotion] = useState<IDevotion | null>(null);

  const mainOccasions = [
    {
      title: "Istentisztelet",
      place: "a templomban",
      day: "Vasárnap",
      startingAt: "10:20 és 16:20 órai kezdéssel",
    },
    {
      title: "Áhitat",
      place: "a parókián",
      day: "Hétfőtől szombatig",
      startingAt: "8:30 órai kezdéssel",
    },
    {
      title: "Bibliaóra",
      place: "a parókián",
      day: "Szerdán",
      startingAt: "18:00 órai kezdéssel",
    },
  ];

  useEffect(() => {
    axios.defaults.baseURL = urls.getBaseUrl();
    axios
      .get("/devotions")
      .then((response) => {
        setDevotion(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching devotions:", error);
      });
  }, []);

  function DailyBibleSection() {
    const navigate = useNavigate();

    return (
      <div className="daily-bible-section">
        <div className="daily-date">Jún.10</div>
        <div className="daily-text">
          <div className="daily-text-first-part">{devotion?.ige}</div> &nbsp;
          <div className="daily-text-second-part">{devotion?.igehely}</div>
        </div>
        <div className="full-daily-container">
          <div className="daily-description">
            A teljes napi áhitat a fenti igével a következő gombra kattintva
            megtekinthető
          </div>
          <div className="separation-line" />
          <div
            className="daily-button"
            onClick={() => {
              navigate("/egyebek/napiige");
            }}
          >
            Napi áhitat
          </div>
        </div>
      </div>
    );
  }

  function HomeCenterSection() {
    const MainOccasions = () => {
      return (
        <div className="main-occasions">
          {mainOccasions.map((occasion, key) => {
            return (
              <div className="occasion-box" key={key}>
                <div className="occasion-place">
                  <div className="occ-title">{occasion.title}</div>
                  <div className="occ-place">{occasion.place}</div>
                </div>
                <div className="occasion-time">
                  <div className="occ-day">{occasion.day}</div>
                  <div className="occ-starting-at">{occasion.startingAt}</div>
                </div>
              </div>
            );
          })}
        </div>
      );
    };

    return (
      <div className="home-center-section" key="home-center-section">
        <ChirchAnimation view="desctop-view" />
        {MainOccasions()}
      </div>
    );
  }

  return (
    <div className="home-page" id="homePage" key="homePage">
      <Navbar configuration={routingConfiguration} />
      <div className="content">
        <div className="home-page-first-screen">
          <div className="clouds-background" />
          <div className="chirch-name-on-mobile">
            Köröstárkányi Református Gyülekezet
          </div>
          <DailyBibleSection />
          <HomeCenterSection />
        </div>
        <SecondScreen />
      </div>
    </div>
  );
};

export default HomePage;
