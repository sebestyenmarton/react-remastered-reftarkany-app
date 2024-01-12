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

export interface IUser {
  username: string;
  token: string;
}

export interface ILoginFormState {
  // Define local state properties here
}
