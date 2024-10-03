import React from "react";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import SecondScreen from "../../screens/second-screen/second-screen";

import DetailCard from "../../detail-card/detail-card";
import { UCAboutTheChirchDetails } from "../../../utils/utileContents";
import { isEven } from "../../../utils/utils";

import "./about-the-chirch-page.scss";

function AboutTheChirch() {
  return (
    <div className="about-the-chirch-container">
      {UCAboutTheChirchDetails.map((chirch, index, idx) => {
        return (
          <DetailCard
            cardDetail={chirch}
            floating={isEven(index + 1) ? "right" : "left"}
          ></DetailCard>
        );
      })}
    </div>
  );
}

const AboutTheChirchPage = () => {
  return (
    <div className="about-the-chirch-page" id="AboutTheChirch">
      <Navbar
        selectedValue="egyhazkozsegunkrol"
        configuration={routingConfiguration}
      />
      <div className="content">
        <div className="about-the-chirch-page-first-screen">
          <div className="about-the-chirch-page-title">Hírdetések</div>
          <AboutTheChirch />
        </div>
        <SecondScreen />
      </div>
    </div>
  );
};

export default AboutTheChirchPage;
