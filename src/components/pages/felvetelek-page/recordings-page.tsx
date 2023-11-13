import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import "./recordings-page.scss";

interface Recording {
  cim: string;
  datum: string;
  kategoria: string;
  link: string;
  szolgal: string;
  tipus: string;
}

const RecordingsPage = () => {
  const [recordings, setRecordings] = useState<Recording[]>([]);

  useEffect(() => {
    getRecordings();
  }, []);

  //TODO: Must be resolved the redirecting with a global baseURL
  /**
   *    Remote host url:
   * http://beta.reftarkany.hu/refapi/recordings
   *
   * Local host url:
   * http://localhost/refapi/recordings/
   **/

  function getRecordings() {
    axios
      .get<Recording[]>("http://localhost/refapi/recordings")
      .then(function (response: AxiosResponse<Recording[]>) {
        setRecordings(response.data);
        console.log("recordings:", response.data);
      });
  }

  return (
    <div className="recordings-page" id="Recordings">
      <Navbar selectedValue="felvetelek" configuration={routingConfiguration} />
      <div className="content">
        {recordings.length > 0 &&
          recordings.map((rec) => {
            return <div className="rec-link">{rec.link}</div>;
          })}
      </div>
    </div>
  );
};

export default RecordingsPage;
