import type { SkillPointsPattern } from "../wizard/types/SkillPointsPattern";
import type { Characteristic } from "./../wizard/types/Characteristic";

export function useSkillPoints() {
  function getOccupationSkillPoints(
    pattern: SkillPointsPattern[],
    characteristic: Characteristic
  ) {
    let skillPoints = 0;
    pattern.forEach((element) => {
      let maxValue = 0;
      element.possibleAttributes.forEach((attribute) => {
        const compareValue = GetCharacteristicValue(attribute, characteristic);
        if (compareValue > maxValue) {
          maxValue = compareValue;
        }
      });
      skillPoints += element.multiplier * maxValue;
    });
    return skillPoints;
  }
  return { getOccupationSkillPoints };
}

function GetCharacteristicValue(
  characteristicName: string,
  characteristic: Characteristic
): number {
  switch (characteristicName) {
    case "strength":
      return characteristic.strength;
    case "constitution":
      return characteristic.constitution;
    case "size":
      return characteristic.size;
    case "dexterity":
      return characteristic.dexterity;
    case "appearance":
      return characteristic.appearance;
    case "intelligence":
      return characteristic.intelligence;
    case "power":
      return characteristic.power;
    case "education":
      return characteristic.education;
    case "luck":
      return characteristic.luck;
    default:
      throw Error(`${characteristicName} is not an entity of Characteristic`);
  }
}
