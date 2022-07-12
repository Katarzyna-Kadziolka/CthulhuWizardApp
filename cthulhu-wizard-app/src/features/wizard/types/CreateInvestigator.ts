import type { Characteristic } from "./Characteristic";
import type { Gender } from "./Gender";

export interface CreateInvestigator {
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  birthPlace: string;
  livingPlace: string;
  characteristic: Characteristic;
}
