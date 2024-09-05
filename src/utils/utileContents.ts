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

export const UCAdvertisersDetails = [
  {
    title: "Ifjúsági Bibliaóra",
    image: "1",
    content: [
      {
        headTitle: "Hetente tartunk ifit, 20:00-tól",
        description: [
          "Fiatal vagy, de már most meg szeretnéd ismerni az élő Istent? Tudni szeretnéd mit tett érted Jézus? “Ma még lehet, ma még szabad, borulj le a kereszt alatt.” Az e heti alkalmon is együtt kereshetjük az Úr jelenlétét, ilyenkor együtt imádjuk, dicsőítjük Őt, imaközösségben veszünk részt, e mellett érdekfeszítő témákról is beszélgetünk. Az alkalom végén pedig sokszor a játék sem marad el.",
          "",
          "-> Szeretettel várunk!",
        ],
      },
    ],
  },
  {
    title: "A további hírdetések hamarosan láthatóak lesznek!",
  },
] as ICardDetail[];

export const UCAboutTheChirchDetails = [
  {
    title: "A gyülekezet jelenlegi lelkipásztora",
    image: "2",
    content: [
      {
        headTitle: "Sebestyén László Ede",
        description: [
          "1969 április 17.-én születtem az Arad megyei Kisjenőn. Nagykárolyban nőttem föl, ott is érettségiztem.",
          "Lelklipásztori szolgálatot 1995 szept.15.-étől, a kolozsvári teológiai tanulmányok befejezése után Hosszúmezőn végeztem, majd 2015 június 1-től Köröstárkányban végzek",
        ],
      },
    ],
  },
  {
    title: "A templom rövid története",
    image: "3",
    content: [
      {
        description: [
          "Köröstárkány az 1332-es pápai tizedjegyzékben szerepel először Tharkan néven. A falu nevét valószínüleg egy török-tatár eredetű méltóságnévből kapta.",
          "1422-ben színmagyar közösségként említik a feljegyzésekben. Az akkori templom gótikus stílusban épült. Freskói hasonlíthattak a magyarremetei templomban látható freskókhoz. Az egyházközségnek egy értékes harangja is volt, mely 1520-ban készült.",
        ],
      },
    ],
  },
  {
    title: "Reformáció köröstárkányban",
    content: [
      {
        description: [
          "A reformáció az 1500-as évek végén terjed el a környéken. Az új hit terjedéséhez a vidékről származó Belényesi Gergely, a Belényesen tanító Méliusz Juhász Péter és a városban szolgáló, korábban dunántúli püspök, Pathay István járultak hozzá tevékenyen. 1606-re Bethlen Gábor fejedelemsége idején Tárkány már teljesen református lesz és virágzó egyházi élettel rendelkezik. 1622-ben Körösi András a falu lelkipásztora. A közösséget sok csapás éri a következő évtizedekben török, német és sokszor a magyar is rabolja, a lakosságot a járványok pusztítják. A falu azonban Istenbe vetett hittel mindig talpra áll.",
        ],
      },
    ],
  },
  {
    title: "Az új, jelenlegi templom",
    image: "4",
    content: [
      {
        description: [
          "1841-ben határozták el, hogy a szűkösnek bizonyult régi templom helyett egy nagyobbat építenek. 1844-re készült el a templom, amit nem sokáig használhatnak, ugyanis 13 év múlva, 1857-ben leég. A templomot 1859-re újítják fel teljesen, bár a belső tér évekig készül. 1860-ban az alsó karat, 1869-ben pedig a felső karzat készül el. A padok és a karzatok mellvédjét 1870-ben festi le egy helyi mester sötétkék alapon színes virágos mintával.",
          "A mai napig többszörös javításon megy keresztül a templom. Nagyobb méretű javítást 1924-ben eszközölnek rajta. Ekkor festik le egyszínű világos kékre a templom padjait. Az orgonát 1955-ben vásárolják a nagyvárad-olaszi egyházközségtől 150 évi használat után. A toronyban 2 harang szolgál. A kis-harang 1901-ből, a nagy-harang 1923-ból való volt, megrepedt, helyébe újat öntettünk 2017-ben.",
        ],
      },
    ],
  },
  {
    title: "A gyülekezeti élet",
    content: [
      {
        description: [
          "Egyházközségünkben a 282 családban 877 lélek van nyílvántartva.",
          "Egy vasárnap délelőtti Istentiszteleten átlag 150-en, míg egy vasárnap délutáni Istentiszteleten átlag 55-en veszünk részt.",
          "A gyülekezeti bibliaórákon átlag 19-en, az ifjúsági bibliaórákon átlag 16-an vesznek részt.",
          "A reggeli áhitatok alkalmain 6-7 személy szokott részt venni.",
          "A hitoktatói szolgálatot az iskolában Halász Rozália vallástanárnő végzi, míg a gyülekezeti vallásórákat Sebestyén Anna-Enikő kántornő vezeti. A konfirmációi előkészítés 3 csoportban zajlik a lelkipásztor vezetésével.",
        ],
      },
    ],
  },
  {
    title: "Köröstárkányi reformátusként mi lehet a célom?",
    content: [
      {
        description: [
          "Sokféle rohangálásom közepedte ott legyek, ahol lennem kell, azt tegyem, amit tennem kell! E közben Salamonnal együtt csodálkozzak rá Isten nagy tetteire s az Ő akaratához igazodó életemmel megtanuljam becsülni azt, ami örökké megmarad.",
          "",
          "Minden más kiesik az idő rostáján, de az Ő szava megáll.",
        ],
      },
    ],
  },
  {
    title: "Prédikátor 3,14-15",
    content: [
      {
        description: [
          "Rájöttem, hogy mindaz, amit Isten tesz, örökké megmarad, nincs ahhoz hozzá tenni való és nincs belőle elvenni való.",
          "Azért rendezte Isten így, hogy féljék őt.",
          "Ami volt, régóta megvan és ami lesz, már régen megvolt, és az Isten előkeríti azt, ami tovatűnt.",
        ],
      },
    ],
  },
] as ICardDetail[];
