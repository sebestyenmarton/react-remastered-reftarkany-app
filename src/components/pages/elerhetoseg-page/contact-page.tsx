import React from "react";

import { routingConfiguration } from "../../../service/WebUrlMapper";

import "./contact-page.scss";
import Navbar from "../../navbar/navbar";

import { FaUserCircle } from "react-icons/fa";

const ContactPage = () => {
  const mapHref =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2739.5555932656225!2d22.360271975927123!3d46.63554115452835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4748b01950d0c933%3A0x67ee16b57ad0d8a6!2sBiserica%20Reformat%C4%83!5e0!3m2!1sen!2sro!4v1700331541428!5m2!1sen!2sro";

  return (
    <div className="contact-page" id="Contact">
      <Navbar
        selectedValue="elerhetoseg"
        configuration={routingConfiguration}
      />
      <div className="content">
        <div className="background1">
          <div className="contact-map">
            <div className="contact-button">
              <div className="contact">
                <div className="main">
                  <div className="profil">
                    <FaUserCircle className="user" />
                  </div>
                  <div className="title">ELÉRHETŐSÉGEINK </div>
                </div>
                <div className="title-contact">Lelkipásztor elérhetőségei</div>
                <div className="text1">
                  Sebestyén László Ede <br />
                  Tel. (004)-0773-325-322 <br /> E-mail:
                  <span className="e-mail"> sledelp@gmail.com</span>
                </div>
                <div className="title-post">Hivatalos postacím</div>
                <div className="text2">
                  România, Jud. Bihor,
                  <br /> Tărcaia, nr. 56,
                  <br /> COD.: 417575,
                  <br /> Parohia Reformată
                </div>
              </div>
              <button
                className="button"
                onClick={() => {
                  window.open(mapHref);
                }}
              >
                Hely a térképen
              </button>
            </div>
            <div className="map" id="Map">
              <iframe
                title="contact-location-on-map"
                className="map-iframe"
                src={mapHref}
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="background2"></div>
      </div>
    </div>
  );
};

export default ContactPage;
