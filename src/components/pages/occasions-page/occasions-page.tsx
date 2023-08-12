import Navbar from "../../navbar/navbar";

import "./occations-page.scss";

const OccationsPage = () => {
  return (
    <div className="occations-page" id="Occations">
      <Navbar
        selectedValue="alkalmaink"
        configuration={[
          { label: "", value: "főoldal" },
          { label: "alkalmaink", value: "alkalmaink" },
          { label: "hirdetesek", value: "hírdetések" },
          { label: "egyhazkozsegunkrol", value: "egyházközségünkről" },
          { label: "felvetelek", value: "felvételek" },
          { label: "elerhetoseg", value: "elérhetőség" },
          { label: "egyebek", value: "egyebek" },
        ]}
      />
      <div className="content"></div>
    </div>
  );
};

export default OccationsPage;
