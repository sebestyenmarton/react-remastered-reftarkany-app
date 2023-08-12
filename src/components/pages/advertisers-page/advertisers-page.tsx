import "./advertisers-page.scss";
import Navbar from "../../navbar/navbar";

const AdvertisersPage = () => {
  return (
    <div className="advertisers-page" id="Advertisers">
      <Navbar
        selectedValue="hirdetesek"
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

export default AdvertisersPage;
