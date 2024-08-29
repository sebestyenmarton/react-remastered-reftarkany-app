import React from "react";

import Bible from "./components/bible/bible";
import { routingConfiguration } from "../../../service/WebUrlMapper";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../navbar/navbar";

import "./others-page.scss";
import Napiige from "./components/napiige/napiige";
import SecondScreen from "../../screens/second-screen/second-screen";

const OthersPage = () => {
  return (
    <div className="others-page" id="OthersPage">
      <Navbar selectedValue="egyebek" configuration={routingConfiguration} />
      <div className="other-page-content">
        <Routes>
          <Route path="/biblia" element={<Bible />} />
          <Route path="/napiige" element={<Napiige />} />
        </Routes>
      </div>
      <SecondScreen />
    </div>
  );
};

export default OthersPage;
