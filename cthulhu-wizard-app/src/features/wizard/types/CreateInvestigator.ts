import type { Gender } from "./Gender";

export interface CreateInvestigator {
  FirstName: string;
  LastName: string;
  Age: number;
  Gender: Gender;
  BirthPlace: string;
  LivingPlace: string;
}
