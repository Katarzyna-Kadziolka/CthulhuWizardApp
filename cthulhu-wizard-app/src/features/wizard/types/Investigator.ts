import type { Occupation } from "./Occupation";
import type { Characteristic } from "./Characteristic";
import type { Gender } from "./Gender";

export interface Investigator {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  birthPlace: string;
  livingPlace: string;
  characteristic: Characteristic;
  occupation: Occupation | undefined;
}
