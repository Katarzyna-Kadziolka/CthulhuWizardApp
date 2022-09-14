import { CharacteristicName } from "./../wizard/types/CharacteristicName";
import type { SkillPointsPattern } from "../wizard/types/SkillPointsPattern";
import type { Characteristic } from "./../wizard/types/Characteristic";

export function useSkillPoints() {
  function getOccupationSkillPoints(
    pattern: SkillPointsPattern[],
    characteristic: Characteristic
  ) {
    let skillPoints = 0;
    if (pattern != null) {
      pattern.forEach((element) => {
        let maxValue = 0;
        element.possibleAttributes.forEach((attribute) => {
          const compareValue = GetCharacteristicValue(
            attribute,
            characteristic
          );
          if (compareValue > maxValue) {
            maxValue = compareValue;
          }
        });
        skillPoints += element.multiplier * maxValue;
      });
      return skillPoints;
    }
    return 0;
  }
  return { getOccupationSkillPoints };
}

function GetCharacteristicValue(
  characteristicName: string,
  characteristic: Characteristic
): number {
  switch (characteristicName) {
    case CharacteristicName.Strength:
      return characteristic.strength;
    case CharacteristicName.Constitution:
      return characteristic.constitution;
    case CharacteristicName.Size:
      return characteristic.size;
    case CharacteristicName.Dexterity:
      return characteristic.dexterity;
    case CharacteristicName.Appearance:
      return characteristic.appearance;
    case CharacteristicName.Intelligence:
      return characteristic.intelligence;
    case CharacteristicName.Power:
      return characteristic.power;
    case CharacteristicName.Education:
      return characteristic.education;
    case CharacteristicName.Luck:
      return characteristic.luck;
    default:
      throw Error(`${characteristicName} is not an entity of Characteristic`);
  }
}
