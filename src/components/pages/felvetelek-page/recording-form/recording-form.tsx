// RecordingForm.tsx
import React, { useState } from "react";

import "./recording-form.scss";
import Button from "@mui/joy/Button";
import { MdUpload } from "react-icons/md";
import MyInput from "../../../form/my-input/my-inut";

const RecordingForm: React.FC<{ onSubmit: (formData: any) => void }> = ({
  onSubmit,
}) => {
  const [formValues, setFormValues] = useState<{
    [key: string]: string;
  }>({
    tipus: "",
    cim: "",
    link: "",
    szolgal: "",
    datum: "",
    kategoria: "",
  });

  const inputConfigs = [
    {
      name: "tipus",
      label: "Típus",
      placeholder: "pl. ahitat",
      type: "text",
      icon: "link",
    },
    {
      name: "cim",
      label: "Cím",
      placeholder: "pl. Ne félj! - Ézs 41, 10-14",
      type: "text",
      icon: "link",
    },
    {
      name: "link",
      label: "Youtube Link",
      placeholder: "pl. https://www.youtube.com/embed/...",
      type: "text",
      icon: "link",
    },
    {
      name: "szolgal",
      label: "Szolgálattevő",
      placeholder: "pl. Sebestyén László Ede",
      type: "text",
      icon: "link",
    },
    {
      name: "datum",
      label: "Pelda",
      placeholder: "Datum",
      type: "text",
      icon: "link",
    },
    {
      name: "kategoria",
      label: "Kategória",
      placeholder: "pl. Istentisztelet",
      type: "text",
      icon: "link",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formValues", formValues);
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-content">
        <div className="inputs">
          {inputConfigs.map((config) => (
            <MyInput
              key={config.name}
              name={config.name}
              label={config.label}
              placeholder={config.placeholder}
              type={config.type}
              icon={config.icon}
              value={formValues[config.name]}
              onChange={handleInputChange}
            />
          ))}
        </div>
        <Button type="submit" endDecorator={<MdUpload />}>
          Küldés
        </Button>
      </div>
    </form>
  );
};

export default RecordingForm;
