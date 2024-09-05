import React from "react";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import SecondScreen from "../../screens/second-screen/second-screen";

import "./advertisers-page.scss";
import { UCAdvertisersDetails } from "../../../utils/utileContents";
import DetailCard from "../../detail-card/detail-card";
import { isEven } from "../../../utils/utils";

function Advertisers() {
  return (
    <div className="advertisers-container">
      {UCAdvertisersDetails.map((advertiser, index) => {
        return (
          <DetailCard
            cardDetail={advertiser}
            floating={isEven(index + 1) ? "right" : "left"}
          ></DetailCard>
        );
      })}
    </div>
  );
}

const AdvertisersPage = () => {
  return (
    <div className="advertisers-page" id="Advertisers">
      <Navbar selectedValue="hirdetesek" configuration={routingConfiguration} />
      <div className="content">
        <div className="advertisers-page-first-screen">
          <div className="advertisers-title">Hírdetések</div>
          <Advertisers />
        </div>
        <SecondScreen />
      </div>
    </div>
  );
};

export default AdvertisersPage;
