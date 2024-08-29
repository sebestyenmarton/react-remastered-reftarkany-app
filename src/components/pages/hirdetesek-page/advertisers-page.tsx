import React from "react";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import SecondScreen from "../../screens/second-screen/second-screen";

import "./advertisers-page.scss";

const AdvertisersPage = () => {
  return (
    <div className="advertisers-page" id="Advertisers">
      <Navbar selectedValue="hirdetesek" configuration={routingConfiguration} />
      <div className="content">
        <div className="advertisers-page-first-screen"></div>
        <SecondScreen />
      </div>
    </div>
  );
};

export default AdvertisersPage;
