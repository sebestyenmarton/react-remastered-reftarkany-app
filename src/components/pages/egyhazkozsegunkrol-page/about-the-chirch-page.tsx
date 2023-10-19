import React from "react";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import "./about-the-chirch-page.scss";

const AboutTheChirch = () => {
  return (
    <div className="about-the-chirch-page" id="AboutTheChirch">
      <Navbar
        selectedValue="egyhazkozsegunkrol"
        configuration={routingConfiguration}
      />
      <div className="content"></div>
    </div>
  );
};

export default AboutTheChirch;
