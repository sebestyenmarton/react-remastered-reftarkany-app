import React, { useState } from "react";

import "./recording-form.scss";
import Button from "@mui/joy/Button";
import { MdUpload } from "react-icons/md";
import MyInput from "../../../form/my-input/my-inut";
import DropdownInput from "../../../form/dropdown-input/dropdown-input";
import { UCRecordingFormInput } from "../../../../utils/utileContents";

const RecordingForm: React.FC<{
  onSubmit: (formData: any) => void;
  isOnEditMode?: boolean;
  initialValues?: any;
}> = ({ onSubmit, initialValues, isOnEditMode = false }) => {
  const [formValues, setFormValues] = useState<{
    [key: string]: string;
  }>(
    initialValues || {
      tipus: "",
      cim: "",
      link: "",
      szolgal: "",
      datum: "",
      kategoria: "",
    }
  );

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
    onSubmit(formValues);
  };

  const handleEditSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-content">
        <div className="inputs">
          {UCRecordingFormInput.map((config) => [
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
              <div className="last-input-with-submit-button" key={config.name}>
                <DropdownInput
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
                {isOnEditMode ? (
                  <Button type="button" onClick={handleEditSubmit}>
                    Szerkesztés
                  </Button>
                ) : (
                  <Button type="submit" endDecorator={<MdUpload />}>
                    Küldés
                  </Button>
                )}
              </div>
            ),
          ])}
        </div>
      </div>
    </form>
  );
};

export default RecordingForm;
