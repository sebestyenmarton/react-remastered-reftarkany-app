import React from "react";

import Navbar from "../../../navbar/navbar";

import { routingConfiguration } from "../../../../service/WebUrlMapper";
import "./about-the-chirch-page.scss";

const BiblePage = () => {
  return (
    <div className="about-the-chirch-page" id="BiblePage">
      <Navbar selectedValue="egyebek" configuration={routingConfiguration} />
      <div className="content"></div>
    </div>
  );
};

export default BiblePage;
