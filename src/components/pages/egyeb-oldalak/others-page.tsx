import React from "react";

import Bible from "./bible/bible";
import { routingConfiguration } from "../../../service/WebUrlMapper";
import Navbar from "../../navbar/navbar";

import "./others-page.scss";

const OthersPage = () => {
  return (
    <div className="others-page" id="OthersPage">
      <Navbar selectedValue="egyebek" configuration={routingConfiguration} />
      <div className="other-page-content">
        <Bible></Bible>
      </div>
    </div>
  );
};

export default OthersPage;
