import React, { useState, useEffect } from "react";

import Navbar from "../components/navbar/navbar";
import "./home-page.scss";

const HomePage = () => {
  return (
    <div className="home-page" id="homePage">
      <Navbar></Navbar>
      <div className="home-page-packground"></div>
    </div>
  );
};

export default HomePage;
