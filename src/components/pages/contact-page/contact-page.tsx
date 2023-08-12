import Navbar from "../../navbar/navbar";
import "./contact-page.scss";

const ContactPage = () => {
  return (
    <div className="contact-page" id="Contact">
      <Navbar
        selectedValue="elerhetoseg"
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

export default ContactPage;
