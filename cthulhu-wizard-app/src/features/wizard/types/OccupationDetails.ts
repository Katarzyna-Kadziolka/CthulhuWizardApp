import type { OccupationSkillSpecification } from "./OccupationSkillSpecification";
import type { SkillPointsPattern } from "./SkillPointsPattern";

export interface OccupationDetails {
  id: string;
  name: string;
  imageUrl: string;
  descritpion: string;
  suggestedContacts: string;
  isLovecraftian: boolean;
  skillPoints: number;
  minCreditRating: number;
  maxCreditRating: number;
  skills: OccupationSkillSpecification[];
  skillPointsPattern: SkillPointsPattern[];
}
