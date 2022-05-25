import type { Gender } from "./Gender";

export interface Investigator {
  Id: string;
  FirstName: string;
  LastName: string;
  Age: number;
  Gender: Gender;
  BirthPlace: string;
  LivingPlace: string;
}
