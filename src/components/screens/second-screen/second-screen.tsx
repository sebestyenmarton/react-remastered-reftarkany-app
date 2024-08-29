import React from "react";

import "./second-screen.scss";
import ChirchAnimation from "./chirch-animation/chirch-animation";

const SecondScreen = () => {
  return (
    <div className="home-page-second-screen">
      <div className="page-text">
        Úgy szerette Isten a világot, hogy egyszülött fiát adta,
        <br /> hogy aki hisz Ő benne, annak örök élete legyen.
      </div>
      <ChirchAnimation view="mobile-view" />
      <div className="backround-image-text">Köröstárkány madártávlatból</div>
    </div>
  );
};

export default SecondScreen;
