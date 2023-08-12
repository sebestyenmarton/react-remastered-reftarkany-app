import Navbar from "../../navbar/navbar";
import "./recordings-page.scss";

const RecordingsPage = () => {
  return (
    <div className="recordings-page" id="Recordings">
      <Navbar
        selectedValue="felvetelek"
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

export default RecordingsPage;
