import React, { useEffect, useState } from "react";

import "./napiige.scss";
import axios from "axios";
import urls from "../../../../../service/ApplicationHttpClient";
import { IDevotion } from "../../../../../typings/global";
import "./napiige.scss";

const Napiige: React.FC = () => {
  const [devotion, setDevotion] = useState<IDevotion | null>(null);

  useEffect(() => {
    axios.defaults.baseURL = urls.getBaseUrl();
    axios
      .get("/devotions")
      .then((response) => {
        setDevotion(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching devotions:", error);
      });
  }, []);

  if (devotion) {
    return (
      <div className="devotion-page" id="devotionPage" key="devotionPage">
        <div className="content">
          <div className="napiige-content">
            <div className="napiige-content-title">{devotion.cim}</div>
            <div className="napiige-content-passage">
              {devotion.ige}&nbsp;
              <b>{devotion.igehely}</b>
            </div>
            <div className="napiige-content-devotion">{devotion.ahitat}</div>
            <div className="napiige-content-pray-box">
              <div className="label">Imádság&nbsp;</div>
              <div className="text">{devotion.ima}</div>
            </div>
            <div className="napiige-content-things">
              <div className="label">A nap gondolata&nbsp;</div>
              <div className="text">{devotion.gondolat}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Napiige;
