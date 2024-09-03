import { ICardDetail } from "../typings/global";

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

export const UCOccasionDetails = [
  {
    title: "Közös alkalmaink",
    iconName: "church",
    content: [
      {
        headTitle: "Vasárnapi Istentiszteletek",
        description: ["10:20 és 16:20 órai kezdéssel a templomunkban"],
      },
      {
        headTitle: "Hétfőtől szombatig áhitatok",
        description: ["8:30-tól a parókián"],
      },
      {
        headTitle: "Szerdai gyülekezeti Bibliaóra",
        description: ["20:00 órai kezdéssel az imateremben"],
      },
      {
        headTitle: "Házi-Istentisztelet",
        description: ["alkalmanként"],
      },
    ],
  },
  {
    title: "Egyéb alkalmak",
    iconName: "house",
    content: [
      {
        headTitle: "Csütörtöki kátéórák",
        description: [
          "15:00 órától az 5.-eseknek",
          "16:00 órától az 6.-osoknak",
          "17:00 órától az 7.-eseknek",
        ],
      },
      {
        headTitle: "Pénteki gyülekezeti vallásóra",
        description: [
          "15 órától az előkészítő osztálynak",
          "és az 1-2. osztályosoknak",
          "16 órától 3-4. osztályosoknak",
        ],
      },
      {
        headTitle: "Pénteki ifjúsági Bibliaóra",
        description: ["20:00 órai kezdéssel az imateremben"],
      },
      {
        headTitle: "Szombati vallásóras az óvodásoknak",
        description: ["11:00 órai kezdéssel"],
      },
    ],
  },
] as ICardDetail[];

export const UCContactDetails = {
  title: "ELÉRHETŐSÉGEINK",
  iconName: "user",
  content: [
    {
      headTitle: "Lelkipásztor elérhetőségei",
      description: [
        "Sebestyén László Ede",
        "Tel. (004)-0773-325-322",
        "E-mail: sledelp@gmail.com",
      ],
    },
    {
      headTitle: "Hivatalos postacím",
      description: [
        "România, Jud. Bihor,",
        "Tărcaia, nr. 56,",
        "COD.: 417575,",
        "Parohia Reformată",
      ],
    },
  ],
} as ICardDetail;
