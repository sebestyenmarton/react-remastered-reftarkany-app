// RecordingForm.tsx
import React, { useState } from "react";

import "./recording-form.scss";
import Button from "@mui/joy/Button";
import { MdUpload } from "react-icons/md";
import MyInput from "../../../form/my-input/my-inut";
import DropdownInput from "../../../form/dropdown-input/dropdown-input";

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
      name: "cim",
      label: "Cím",
      placeholder: "pl. Ne félj! - Ézs 41, 10-14",
      type: "text",
    },
    {
      name: "link",
      label: "Youtube Link",
      placeholder: "pl. https://www.youtube.com/embed/...",
      type: "text",
    },
    {
      name: "szolgal",
      label: "Szolgálattevő",
      placeholder: "pl. Sebestyén László Ede",
      type: "text",
    },
    {
      name: "datum",
      label: "Dátum",
      placeholder: "2022.05.12",
      type: "text",
    },
    {
      name: "category",
      label: "",
      placeholder: "Kategória kiválasztása",
      type: "text",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
          {inputConfigs.map((config) => [
            config.name !== "category" && (
              <MyInput
                key={config.name}
                name={config.name}
                label={config.label}
                placeholder={config.placeholder}
                type={config.type}
                value={formValues[config.name]}
                onChange={handleInputChange}
              />
            ),
            config.name === "category" && (
              <div className="last-input-with-submit-button">
                <DropdownInput
                  key={config.name}
                  tipus={formValues["tipus"]}
                  category={formValues["kategoria"]}
                  placeholder={config.placeholder}
                  onChange={(tipus, kategoria) => {
                    setFormValues((prevFormValues) => ({
                      ...prevFormValues,
                      tipus,
                      kategoria,
                    }));
                  }}
                />
                <Button type="submit" endDecorator={<MdUpload />}>
                  Küldés
                </Button>
              </div>
            ),
          ])}
        </div>
      </div>
    </form>
  );
};

export default RecordingForm;
