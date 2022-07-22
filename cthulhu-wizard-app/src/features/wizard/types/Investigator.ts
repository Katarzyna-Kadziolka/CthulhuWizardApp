import type { Occupation } from "./Occupation";
import type { Characteristic } from "./Characteristic";
import type { Gender } from "./Gender";
import type { InvestigatorSkill } from "./InvestigatorSkill";

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
  skills: InvestigatorSkill[];
}
