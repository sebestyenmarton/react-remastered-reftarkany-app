import React from "react";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import "./contact-page.scss";

const ContactPage = () => {
  return (
    <div className="contact-page" id="Contact">
      <Navbar
        selectedValue="elerhetoseg"
        configuration={routingConfiguration}
      />
      <div className="content"></div>
    </div>
  );
};

export default ContactPage;
