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
      <div className="content">
        <div className="background1">
          <div className="contact-map">
            <div className="contact">
              <div className="main">
                <div className="profil"> </div>
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
            <div className="map">
              <iframe
                title="Google Map"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                src={
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d684.8888925861762!2d22.361614108085657!3d46.635541607286896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4748b01950d0c933%3A0x67ee16b57ad0d8a6!2sReform%C3%A1tus%20Templom!5e0!3m2!1shu!2sro!4v1700322256155!5m2!1shu!2sro"
                }
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
