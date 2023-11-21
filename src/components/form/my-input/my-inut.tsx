import React from "react";
import Input from "@mui/joy/Input";
import { FaLink } from "react-icons/fa6";
import { styled } from "@mui/joy/styles";

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
  icon: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: React.FC<MyInputProps> = ({
  name,
  label,
  placeholder,
  type,
  icon,
  value,
  onChange,
}) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "link":
        return <FaLink />;
      default:
        return "   ";
    }
  };

  return (
    <Input
      startDecorator={renderIcon(icon)}
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
};

export default MyInput;
