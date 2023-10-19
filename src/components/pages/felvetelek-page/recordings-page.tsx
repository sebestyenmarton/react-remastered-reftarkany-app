import React from "react";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import "./recordings-page.scss";

const RecordingsPage = () => {
  return (
    <div className="recordings-page" id="Recordings">
      <Navbar selectedValue="felvetelek" configuration={routingConfiguration} />
      <div className="content"></div>
    </div>
  );
};

export default RecordingsPage;
