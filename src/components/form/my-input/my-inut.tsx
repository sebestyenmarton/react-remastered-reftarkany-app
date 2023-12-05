import React, { useState } from "react";
import Input from "@mui/joy/Input";
import { styled } from "@mui/joy/styles";

import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { FaLink } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import { LiaUserTieSolid } from "react-icons/lia";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

import "./my-input.scss";

const StyledInput = styled("input")({
  border: "none", // remove the native input border
  minWidth: 0, // remove the native input width
  outline: 0, // remove the native input outline
  padding: "10px 10px 10px 0", // remove the native input padding
  paddingTop: "1em",
  flex: 1,
  color: "inherit",
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontSize: "13px",
  fontStyle: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  textOverflow: "ellipsis",
  "&::placeholder": {
    opacity: 0,
    transition: "0.1s ease-out",
  },
  "&:focus::placeholder": {
    opacity: 1,
  },
  "&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label":
    {
      top: "0.45rem",
      fontSize: "0.6rem",
    },
  "&:focus ~ label": {
    color: "var(--Input-focusedHighlight)",
  },
  "&:-webkit-autofill": {
    alignSelf: "stretch", // to fill the height of the root slot
  },
  "&:-webkit-autofill:not(* + &)": {
    marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
    paddingInlineStart: "var(--Input-paddingInline)",
    borderTopLeftRadius:
      "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    borderBottomLeftRadius:
      "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
  },
});

const StyledLabel = styled("label")(({ theme }) => ({
  position: "absolute",
  left: "36px",
  lineHeight: 1,
  top: "calc((var(--Input-minHeight) - 1em) / 2)",
  color: theme.vars.palette.text.tertiary,
  fontWeight: theme.vars.fontWeight.md,
  transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  fontSize: "13px", // Adjust as needed
}));

interface InnerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InnerInput = React.forwardRef<HTMLInputElement, InnerInputProps>(
  function InnerInput(props, ref) {
    const id = React.useId();
    const { placeholder, type, label, onChange, name, value } = props;

    return (
      <React.Fragment>
        <StyledInput
          ref={ref}
          id={id}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          name={name}
          value={value}
        />
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      </React.Fragment>
    );
  }
);

interface MyInputProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: React.FC<MyInputProps> = ({
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
}) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "link":
        return <FaLink />;
      case "cim":
        return <HiOutlineChatBubbleBottomCenterText />;
      case "szolgal":
        return <LiaUserTieSolid />;
      case "datum":
        return <IoCalendarNumberOutline />;
      case "tipus":
      case "kategoria":
        return <IoFilterOutline />;
      default:
        return "   ";
    }
  };

  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(
    value ? dayjs(value) : null
  );

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    if (date === null) {
      setSelectedDate(null);
      onChange &&
        onChange({
          target: { name, value: "" },
        } as React.ChangeEvent<HTMLInputElement>);
      return;
    }

    const localDateString = date.format("YYYY-MM-DD");

    setSelectedDate(date);

    onChange &&
      onChange({
        target: { name, value: localDateString },
      } as React.ChangeEvent<HTMLInputElement>);
  };

  if (name === "datum") {
    const dateDefaultValue = value ? dayjs(value) : selectedDate;

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            slotProps={{
              toolbar: { toolbarFormat: "DD / MM / YYYY" },
            }}
            defaultValue={dateDefaultValue}
            onChange={handleDateChange}
            label="Dátum kiválasztása"
          />
        </DemoContainer>
      </LocalizationProvider>
    );
  } else {
    return (
      <Input
        startDecorator={renderIcon(name)}
        slots={{ input: InnerInput }}
        slotProps={{
          input: {
            placeholder,
            type,
            label,
            name,
            value,
            onChange,
          },
        }}
        sx={{
          "--Input-minHeight": "45px",
          "--Input-radius": "6px",
        }}
      />
    );
  }
};

export default MyInput;
