import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import "./recordings-page.scss";

interface Recording {
  id: number;
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
    getRecordings(1, 10);
  }, []);

  //TODO: Must be resolved the redirecting with a global baseURL
  /**
   *    Remote host url:
   * http://beta.reftarkany.hu/refapi/recordings
   *
   * Local host url:
   * http://localhost/refapi/recordings/
   **/

  function getRecordings(pageNumber: number, pageSize: number) {
    axios
      .get<Recording[]>("http://localhost/refapi/recordings", {
        params: {
          pageSize: pageSize,
          page: pageNumber,
        },
      })
      .then(function (response: AxiosResponse<Recording[]>) {
        setRecordings(response.data);
        console.log("recordings:", response.data);
      });
  }

  return (
    <div className="recordings-page" id="Recordings">
      <Navbar selectedValue="felvetelek" configuration={routingConfiguration} />
      <div className="content">
        <div className="recordings">
          {recordings.length > 0 &&
            recordings.map((rec) => {
              return (
                <div className="rec-link" key={rec.id}>
                  <div className="id"> {rec.id}</div>
                  <div className="link"> {rec.link}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RecordingsPage;
