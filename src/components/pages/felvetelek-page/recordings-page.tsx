import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import "./recordings-page.scss";

const RecordingsPage = () => {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    getRecordings();
  }, []);

  function getRecordings() {
    axios.get("http://localhost/refapi/recordings/").then(function (response) {
      setRecordings(response.data);
      console.log("recordings:", recordings);
    });
  }

  return (
    <div className="recordings-page" id="Recordings">
      <Navbar selectedValue="felvetelek" configuration={routingConfiguration} />
      <div className="content"></div>
    </div>
  );
};

export default RecordingsPage;
