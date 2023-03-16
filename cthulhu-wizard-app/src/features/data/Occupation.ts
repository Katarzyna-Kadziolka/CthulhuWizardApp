import { getAllArtCrafts } from "./ArtCraft";
import { getAllFightings } from "./Fighting";
import { getAllFirearms } from "./Firearms";
import { getAllLanguages } from "./Language";
import { getAllPilots } from "./Pilot";
import { getAllSciences } from "./Science";
import { getAllSurvivals } from "./Survival";

export function getAllSkills(): string[] {
  return [
    "Accounting",
    "Animal Handling",
    "Anthropolog",
    "Appraise",
    "Archaeology",
    "Artillery",
    "Charm",
    "Climb",
    "Credit Rating",
    "Cthulhu Mythos",
    "Demolition",
    "Disguise",
    "Diving",
    "Dodge",
    "Drive Auto",
    "Electrical Repair",
    "Fast Talk",
    "First Aid",
    "History",
    "Hypnosis",
    "Intimidate",
    "Jump",
    "Language (Own)",
    "Law",
    "Library Use",
    "Listen",
    "Locksmith",
    "Mechanical Repair",
    "Medicine",
    "Natural World",
    "Navigate",
    "Occult",
    "Operate Heavy Machinery",
    "Persuade",
    "Psychoanalysis",
    "Psychology",
    "Read Lips",
    "Ride",
    "Sleight of Hand",
    "Spot Hidden",
    "Stealth",
    "Swim",
    "Throw",
    "Track",
  ].concat(
    getAllArtCrafts(),
    getAllFightings(),
    getAllFirearms(),
    getAllLanguages(),
    getAllPilots(),
    getAllSciences(),
    getAllSurvivals()
  );
}
