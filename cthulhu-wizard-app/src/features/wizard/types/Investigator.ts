import type { Occupation } from "./Occupation";
import type { Characteristic } from "./Characteristic";
import type { Gender } from "./Gender";

export interface Investigator {
  Id: string;
  FirstName: string;
  LastName: string;
  Age: number;
  Gender: Gender;
  BirthPlace: string;
  LivingPlace: string;
  Characteristic: Characteristic;
  Occupation: Occupation;
}
