import React, { useEffect, useRef } from "react";

import lottie from "lottie-web";
import Navbar from "../../navbar/navbar";

import "./home-page.scss";

const HomePage = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current as HTMLDivElement,
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

  function HomeCenterSection() {
    return (
      <div className="home-center-section">
        <div className="animation-container" ref={container}></div>
      </div>
    );
  }

  return (
    <div className="home-page" id="homePage">
      <Navbar
        configuration={[
          { label: "", value: "főoldal" },
          { label: "alkalmaink", value: "alkalmaink" },
          { label: "hirdetesek", value: "hírdetések" },
          { label: "egyhazkozsegunkrol", value: "egyházközségünkről" },
          { label: "felvetelek", value: "felvételek" },
          { label: "elerhetoseg", value: "elérhetőség" },
          { label: "egyebek", value: "egyebek" },
        ]}
      />
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
