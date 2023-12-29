export const UCRecordingFormInput = [
  {
    name: "cim",
    label: "Cím",
    placeholder: "pl. Ne félj! - Ézs 41, 10-14",
    type: "text",
  },
  {
    name: "link",
    label: "Youtube Link",
    placeholder: "pl. http://www.youtube.com/embed/...",
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

export const UCDropdownInputGroup = {
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

export const UCDropdownInputGroupColor = {
  Istentisztelet: "neutral",
  Áhitat: "primary",
  Ünnepély: "success",
  Ifjúsági: "danger",
} as const;
