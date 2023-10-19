import React from "react";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import "./occations-page.scss";

const OccationsPage = () => {
  return (
    <div className="occations-page" id="Occations">
      <Navbar selectedValue="alkalmaink" configuration={routingConfiguration} />
      <div className="content"></div>
    </div>
  );
};

export default OccationsPage;
