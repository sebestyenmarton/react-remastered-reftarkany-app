import React from "react";

import "./bible.scss";

const Bible: React.FC = () => {
  return (
    <div className="bible-content">
      <div className="bible-content-title">
        <div className="title-first-part">A Biblia</div>
        <div className="title-second-part">
          "...Ó, Uram, a te igéd lámpás..."
        </div>
      </div>
      <div className="inframe-container">
        <iframe
          className="bible-inframe"
          title="Szentírás"
          id="myIframe"
          src="https://szentiras.hu/UF"
          width="100%"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Bible;
