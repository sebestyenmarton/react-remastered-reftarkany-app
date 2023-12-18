export type IOption = { label: string; value: string };

export type AppMainNavigationProps =
  | ""
  | "alkalmaink"
  | "elerhetoseg"
  | "hirdetesek"
  | "egyhazkozsegunkrol"
  | `felvetelek/${string}/${string}`;

export type IRecording = {
  id: number;
  cim: string;
  datum: string;
  kategoria: string;
  link: string;
  szolgal: string;
  tipus: string;
};
