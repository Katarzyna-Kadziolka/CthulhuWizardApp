import type { Characteristic } from "./../wizard/types/Characteristic";

export function getSkillDefaultValue(
  skillName: string,
  characteristic: Characteristic
): number {
  return skillDefaults[skillName](characteristic);
}
type CalculateSkill = (characteristic: Characteristic) => number;
const skillDefaults: Record<string, CalculateSkill> = {
  Accounting: () => 5,
  "Animal Handling": () => 5,
  Anthropolog: () => 1,
  Appraise: () => 5,
  Archaeology: () => 1,
  "Art / Craft (Acting)": () => 5,
  "Art / Craft (Barber)": () => 5,
  "Art / Craft (Carpenter)": () => 5,
  "Art / Craft (Cobbler)": () => 5,
  "Art / Craft (Cook)": () => 5,
  "Art / Craft (Dancer)": () => 5,
  "Art / Craft (Fine Art)": () => 5,
  "Art / Craft (Forgery)": () => 5,
  "Art / Craft (Morris Dancer)": () => 5,
  "Art / Craft (Opera Singer)": () => 5,
  "Art / Craft (Painter & Decorator)": () => 5,
  "Art / Craft (Photographer)": () => 5,
  "Art / Craft (Potter)": () => 5,
  "Art / Craft (Sculptor)": () => 5,
  "Art / Craft (Writer)": () => 5,
  "Art / Craft (Woodwork)": () => 5,
  Artillery: () => 1,
  Charm: () => 15,
  Climb: () => 20,
  "Credit Rating": () => 0,
  "Cthulhu Mythos": () => 0,
  Demolition: () => 1,
  Disguise: () => 5,
  Diving: () => 1,
  Dodge: (characteristic: Characteristic) =>
    Math.floor(characteristic.dexterity / 2),
  "Drive Auto": () => 20,
  "Electrical Repair": () => 10,
  "Fast Talk": () => 5,
  "Fighting (Axe)": () => 15,
  "Fighting (Brawl)": () => 25,
  "Fighting (Chainsaw)": () => 10,
  "Fighting (Flail)": () => 10,
  "Fighting (Garrote)": () => 15,
  "Fighting (Spear)": () => 20,
  "Fighting (Sword)": () => 20,
  "Fighting (Whip)": () => 5,
  "Firearms (Bow)": () => 15,
  "Firearms (Handgun)": () => 20,
  "Firearms (Heavy Weapons)": () => 10,
  "Firearms (Flamethrower)": () => 10,
  "Firearms (Machine Gun)": () => 10,
  "Firearms (Rifle/Shotgun)": () => 25,
  "Firearms (Submachine Gun)": () => 15,
  "First Aid": () => 30,
  History: () => 5,
  Hypnosis: () => 1,
  Intimidate: () => 15,
  Jump: () => 20,
  "Other Language (Any)": () => 1,
  "Other Language (Chinese)": () => 1,
  "Other Language (English)": () => 1,
  "Other Language (French)": () => 1,
  "Other Language (German)": () => 1,
  "Other Language (Italian)": () => 1,
  "Other Language (Japanese)": () => 1,
  "Other Language (Latin)": () => 1,
  "Other Language (Polish)": () => 1,
  "Other Language (Russian)": () => 1,
  "Other Language (Spanish)": () => 1,
  "Other Language (Turkish)": () => 1,
  "Language (Own)": (characteristic: Characteristic) =>
    characteristic.education,
  Law: () => 5,
  "Library Use": () => 20,
  Listen: () => 20,
  Locksmith: () => 1,
  "Mechanical Repair": () => 10,
  Medicine: () => 1,
  "Natural World": () => 10,
  Navigate: () => 10,
  Occult: () => 5,
  "Operate Heavy Machinery": () => 1,
  Persuade: () => 10,
  "Pilot (Aircraft)": () => 1,
  "Pilot (Boat)": () => 1,
  Psychoanalysis: () => 1,
  Psychology: () => 10,
  "Read Lips": () => 1,
  Ride: () => 5,
  "Science (Astronomy)": () => 1,
  "Science (Biology)": () => 1,
  "Science (Botany)": () => 1,
  "Science (Chemistry)": () => 1,
  "Science (Cryptography)": () => 1,
  "Science (Engineering)": () => 1,
  "Science (Forensics)": () => 1,
  "Science (Geology)": () => 1,
  "Science (Mathematics)": () => 10,
  "Science (Meteorology)": () => 1,
  "Science (Pharmacy)": () => 1,
  "Science (Physics)": () => 1,
  "Science (Zoology)": () => 1,
  "Sleight of Hand": () => 10,
  "Spot Hidden": () => 25,
  Stealth: () => 20,
  "Survival (Desert)": () => 10,
  "Survival (Sea)": () => 10,
  "Survival (Arctic)": () => 10,
  Swim: () => 20,
  Throw: () => 20,
  Track: () => 10,
};
