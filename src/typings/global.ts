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

// LoginFormProps interface
export interface LoginFormProps {
  onLogin: (user: User) => void;
  onClose: () => void;
}

// User interface
export interface User {
  id: number;
  username: string;
  token: string;
}

// LoginFormState interface (optional, if you need local state)
export interface LoginFormState {
  // Define local state properties here
}
