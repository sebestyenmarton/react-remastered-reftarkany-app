import React from "react";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import "./occations-page.scss";
import SecondScreen from "../../screens/second-screen/second-screen";
import { ICardDetail } from "../../../typings/global";
import DetailCard from "../../detail-card/detail-card";
import { UCOccasionDetails } from "../../../utils/utileContents";

function Occasions() {
  return (
    <div className="occasions-container">
      {UCOccasionDetails.map((occasion: ICardDetail, idx) => {
        return <DetailCard cardDetail={occasion} index={idx}></DetailCard>;
      })}
    </div>
  );
}

const OccationsPage = () => {
  return (
    <div className="occations-page" id="Occations">
      <Navbar selectedValue="alkalmaink" configuration={routingConfiguration} />
      <div className="content">
        <div className="occations-page-first-screen">
          <div className="occasion-title">Gyülekezeti alkalmak</div>
          <Occasions />
        </div>
        <SecondScreen />
      </div>
    </div>
  );
};

export default OccationsPage;
