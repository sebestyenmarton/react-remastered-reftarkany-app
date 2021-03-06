import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Navbar from "../components/navbar/navbar";
import "./home-page.scss";

const HomePage = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./components/chirch-animation/chirch.json"),
    });
  }, []);

  function DailyBibleSection() {
    return (
      <div className="daily-bible-section">
        <div class="daily-date">Jún.10</div>
        <div class="daily-text">
          „A győzedelmesnek enni adok az elrejtett mannából..”Jel 2,17
        </div>
        <div class="full-daily-container">
          <div class="daily-description">
            A teljes napi áhitat a fenti igével a következő gombra kattintva
            megtekinthető
          </div>
          <div class="separation-line" />
          <div class="daily-button">Napi áhitat</div>
        </div>
      </div>
    );
  }

  function HomeCenterSection() {
    return (
      <div className="home-center-section">
        <div className="animation-container" ref={container}></div>
      </div>
    );
  }

  return (
    <div className="home-page" id="homePage">
      <Navbar></Navbar>
      <div className="content">
        <div className="home-page-packground">
          <div className="clouds-background" />
          <DailyBibleSection />
          <HomeCenterSection />
        </div>
        <div className="home-page-second-part">
          <div className="page-text">
            Úgy szerette Isten a világot, hogy egyszülött fiát adta,
            <br /> hogy aki hisz Ő benne, annak örök élete legyen.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
