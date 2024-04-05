export type IOption = { label: string; value: string };

export type AppMainNavigationProps =
  | ""
  | "egyebek"
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

export interface IDevotion {
  id: number;
  cim: string;
  ige: string;
  igehely: string;
  ahitat: string;
  ima: string;
  gondolat: string;
}

export interface IUser {
  username: string;
  token: string;
}

export interface ILoginFormState {
  // Define local state properties here
}

/* export interface IBibleTranslation {
  abbrev: string;
  id: number;
}

export interface IBibleBook {
  abbrev: string;
  name: string;
  number: number;
}

export interface IBibleApiResponse {
  translation: IBibleTranslation;
  books: IBibleBook[];
} */
