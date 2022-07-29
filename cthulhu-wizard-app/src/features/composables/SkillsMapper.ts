import type { SkillSpecification } from "../wizard/types/SkillSpecification";
import { getAllOccuaptions } from "../data/Occupation";
import { getAllArtCrafts } from "../data/ArtCraft";
import { getAllFightings } from "../data/Fighting";
import { getAllFirearms } from "../data/Firearms";
import { getAllLanguages } from "../data/Language";
import { getAllPilots } from "../data/Pilot";
import { getAllSciences } from "../data/Science";
import { getAllSurvivals } from "../data/Survival";

export function mapSkills(skills: SkillSpecification): SkillSpecification {
  const mappedSkills: SkillSpecification = {
    howMany: skills.howMany,
    from: [],
  };
  skills.from.forEach((element) => {
    switch (element) {
      case "Any":
        mappedSkills.from = mappedSkills.from.concat(getAllOccuaptions());
        break;
      case "Art / Craft (Any)":
        mappedSkills.from = mappedSkills.from.concat(getAllArtCrafts());
        break;
      case "Fighting (Any)":
        mappedSkills.from = mappedSkills.from.concat(getAllFightings());
        break;
      case "Firearms (Any)":
        mappedSkills.from = mappedSkills.from.concat(getAllFirearms());
        break;
      case "Other Language (Any)":
        mappedSkills.from = mappedSkills.from.concat(getAllLanguages());
        break;
      case "Pilot (Any)":
        mappedSkills.from = mappedSkills.from.concat(getAllPilots());
        break;
      case "Science (Any)":
        mappedSkills.from = mappedSkills.from.concat(getAllSciences());
        break;
      case "Survival (Any)":
        mappedSkills.from = mappedSkills.from.concat(getAllSurvivals());
        break;
      default:
        mappedSkills.from.push(element);
    }
  });
  return mappedSkills;
}
