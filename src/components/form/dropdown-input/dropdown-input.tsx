import React, { useState } from "react";
import Select from "@mui/joy/Select";
import Option, { optionClasses } from "@mui/joy/Option";
import Chip from "@mui/joy/Chip";
import List from "@mui/joy/List";
import ListItemDecorator, {
  listItemDecoratorClasses,
} from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
import { FaCheck } from "react-icons/fa6";

import "./dropdown-input.scss";

interface DropdownInputProps {
  tipus: string;
  category: string;
  placeholder: string;
  onChange: (tipus: string, kategoria: string) => void;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
  tipus,
  category: kategoria,
  placeholder,
  onChange,
}) => {
  const group = {
    Istentisztelet: [
      "Istentisztelet",
      "Evangelizációs",
      "Dicsőítős",
      "Bűnbánati",
    ],
    Áhitat: ["Áhitat", "Bibliaóra"],
    Ünnepély: ["Karácsonyi", "Húsvéti", "Anyáknapi"],
    Ifjúsági: ["Ének", "Kicsik szolgálata"],
  };
  const colors = {
    Istentisztelet: "neutral",
    Áhitat: "primary",
    Ünnepély: "success",
    Ifjúsági: "danger",
  } as const;

  const handleChange = (selectedValue: string) => {
    const selectedGroup = Object.entries(group).find(([_, items]) =>
      items.includes(selectedValue)
    );

    if (selectedGroup !== undefined) {
      onChange(selectedGroup[0], selectedValue);
    }
  };

  return (
    <Select
      value={kategoria}
      onChange={(e) => {
        const selectedValue =
          (e?.target as HTMLElement)?.innerText ||
          (e?.target as HTMLElement)?.textContent ||
          "";
        handleChange(selectedValue);
      }}
      placeholder={placeholder}
      className="dropdown-input"
      slotProps={{
        listbox: {
          component: "div",
          sx: {
            maxHeight: 240,
            overflow: "auto",
            "--List-padding": "0px",
            "--ListItem-radius": "0px",
          },
        },
      }}
    >
      {Object.entries(group).map(([name, items], index) => (
        <React.Fragment key={name}>
          {index !== 0 && <ListDivider role="none" />}
          <List
            aria-labelledby={`select-group-${name}`}
            sx={{ "--ListItemDecorator-size": "28px" }}
          >
            <ListItem id={`select-group-${name}`} sticky>
              <Typography level="body-xs" textTransform="uppercase">
                {name} ({items.length})
              </Typography>
            </ListItem>
            {items.map((item) => (
              <Option
                key={item}
                value={item}
                label={
                  <React.Fragment>
                    <Chip
                      size="sm"
                      color={colors[name as keyof typeof group]}
                      sx={{ borderRadius: "xs", mr: 1 }}
                    >
                      {name}
                    </Chip>{" "}
                    {item}
                  </React.Fragment>
                }
                sx={{
                  [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]:
                    {
                      opacity: 1,
                    },
                }}
              >
                <ListItemDecorator sx={{ opacity: 0 }}>
                  <FaCheck />
                </ListItemDecorator>
                {item}
              </Option>
            ))}
          </List>
        </React.Fragment>
      ))}
    </Select>
  );
};

export default DropdownInput;
