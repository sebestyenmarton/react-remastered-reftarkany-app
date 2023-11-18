import React from "react";

import Navbar from "../../navbar/navbar";

import { routingConfiguration } from "../../../service/WebUrlMapper";
import "./contact-page.scss";
import { SassColor } from "sass";

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
  Sebestyén László Ede <br />Tel. (004)-0773-325-322 <br /> E-mail:<span className="e-mail">  sledelp@gmail.com</span>
</div>
<div className="title-post">Hivatalos postacím</div>
<div className="text2">România, Jud. Bihor,<br /> Tărcaia, nr. 56,<br /> COD.: 417575,<br /> Parohia Reformată</div>
</div>
<div className="map">
<iframe
    title="Google Map"
    width="600"
    height="450"
    style={{ border: 0 }}
    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Biserica+reformată,Tărcaia+417575`}
    allowFullScreen
  ></iframe>
  </div>
</div>
        </div>
        <div className="background2">

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
