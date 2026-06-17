import { type ReactElement } from "react";

export interface Member {
  name: string;
  role: string;
  description: ReactElement;
}

export interface Alumnus {
  name: string;
  thesis: string;
  year: number;
}
