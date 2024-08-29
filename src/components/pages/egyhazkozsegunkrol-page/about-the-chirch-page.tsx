import React from "react";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import SecondScreen from "../../screens/second-screen/second-screen";

import "./about-the-chirch-page.scss";

const AboutTheChirch = () => {
  return (
    <div className="about-the-chirch-page" id="AboutTheChirch">
      <Navbar
        selectedValue="egyhazkozsegunkrol"
        configuration={routingConfiguration}
      />
      <div className="content">
        <div className="about-the-chirch-page-first-screen"></div>
        <SecondScreen />
      </div>
    </div>
  );
};

export default AboutTheChirch;
