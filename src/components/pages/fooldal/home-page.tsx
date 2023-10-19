import React, { LegacyRef, useEffect, useRef } from "react";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import "./home-page.scss";

import lottie from "lottie-web";
import Navbar from "../../navbar/navbar";

const HomePage = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const containerMobile = useRef<HTMLDivElement | null>(null);
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
      startingAt: "17:00 órai kezdéssel",
    },
  ];

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current as HTMLDivElement,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("./components/chirch-animation/chirch.json"),
    });
    lottie.loadAnimation({
      container: containerMobile.current as HTMLDivElement,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("./components/chirch-animation/chirch.json"),
    });
  }, []);

  function DailyBibleSection() {
    return (
      <div className="daily-bible-section">
        <div className="daily-date">Jún.10</div>
        <div className="daily-text">
          „A győzedelmesnek enni adok az elrejtett mannából..”Jel 2,17
        </div>
        <div className="full-daily-container">
          <div className="daily-description">
            A teljes napi áhitat a fenti igével a következő gombra kattintva
            megtekinthető
          </div>
          <div className="separation-line" />
          <div className="daily-button">Napi áhitat</div>
        </div>
      </div>
    );
  }

  function AnimationContainer(
    ref: LegacyRef<HTMLDivElement> | undefined,
    view: string
  ) {
    return <div className={`animation-container ${view}`} ref={ref}></div>;
  }

  function HomeCenterSection() {
    const MainOccasions = () => {
      return (
        <div className="main-occasions">
          {mainOccasions.map((occasion) => {
            return (
              <div className="occasion-box">
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
        {AnimationContainer(container, "desctop-view")}
        {MainOccasions()}
      </div>
    );
  }

  return (
    <div className="home-page classnam" id="homePage" key="homePage">
      <Navbar configuration={routingConfiguration} />
      <div className="content">
        <div className="home-page-first-screen">
          <div className="clouds-background" />
          <DailyBibleSection />
          <HomeCenterSection />
        </div>
        <div className="home-page-second-screen">
          <div className="page-text">
            Úgy szerette Isten a világot, hogy egyszülött fiát adta,
            <br /> hogy aki hisz Ő benne, annak örök élete legyen.
          </div>
          {AnimationContainer(containerMobile, "mobile-view")}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
