import { CharacteristicName } from "./../../wizard/types/CharacteristicName";
import type { Characteristic } from "./../../wizard/types/Characteristic";
import type { SkillPointsPattern } from "./../../wizard/types/SkillPointsPattern";
import { describe, expect, it } from "vitest";
import { Build } from "@/features/wizard/types/Build";
import { DamageBonus } from "@/features/wizard/types/DamageBonus";
import { useSkillPoints } from "../SkillPoints";

const characteristic: Characteristic = {
  appearance: 10,
  constitution: 20,
  dexterity: 30,
  education: 40,
  intelligence: 50,
  luck: 60,
  power: 70,
  size: 80,
  strength: 90,
  build: Build.One,
  damageBonus: DamageBonus.PlusOneDiceFour,
  hitPoints: 10,
  magicPoints: 10,
  movementRate: 7,
  sanity: 20,
};

const { getOccupationSkillPoints } = useSkillPoints();

describe("getOccupationSkillPoints", () => {
  it("only one attribute, pattern with one elements", () => {
    const skillPointsPattern: SkillPointsPattern[] = [
      {
        multiplier: 4,
        possibleAttributes: [CharacteristicName.Education],
      },
    ];
    const expectedResult = characteristic.education * 4;
    const result = getOccupationSkillPoints(skillPointsPattern, characteristic);
    expect(result).toBe(expectedResult);
  });
  it("only one attribute, pattern with two elements", () => {
    const skillPointsPattern: SkillPointsPattern[] = [
      {
        multiplier: 2,
        possibleAttributes: [CharacteristicName.Education],
      },
      {
        multiplier: 2,
        possibleAttributes: [CharacteristicName.Dexterity],
      },
    ];
    const expectedResult =
      characteristic.education * 2 + characteristic.dexterity * 2;
    const result = getOccupationSkillPoints(skillPointsPattern, characteristic);
    expect(result).toBe(expectedResult);
  });
  it("two attributes, pattern with two elements", () => {
    const skillPointsPattern: SkillPointsPattern[] = [
      {
        multiplier: 2,
        possibleAttributes: [CharacteristicName.Education],
      },
      {
        multiplier: 2,
        possibleAttributes: [
          CharacteristicName.Dexterity,
          CharacteristicName.Power,
        ],
      },
    ];
    const expectedResult =
      characteristic.education * 2 +
      Math.max(characteristic.dexterity, characteristic.power) * 2;
    const result = getOccupationSkillPoints(skillPointsPattern, characteristic);
    expect(result).toBe(expectedResult);
  });
  it("three attributes, pattern with two elements", () => {
    const skillPointsPattern: SkillPointsPattern[] = [
      {
        multiplier: 2,
        possibleAttributes: [CharacteristicName.Education],
      },
      {
        multiplier: 2,
        possibleAttributes: [
          CharacteristicName.Appearance,
          CharacteristicName.Dexterity,
          CharacteristicName.Strength,
        ],
      },
    ];
    const expectedResult =
      characteristic.education * 2 +
      Math.max(
        characteristic.appearance,
        characteristic.dexterity,
        characteristic.strength
      ) *
        2;
    const result = getOccupationSkillPoints(skillPointsPattern, characteristic);
    expect(result).toBe(expectedResult);
  });
  it("no existing attribute, should throw error", () => {
    const noExistingCharacteristicName = "test";
    const skillPointsPattern: SkillPointsPattern[] = [
      {
        multiplier: 4,
        possibleAttributes: [noExistingCharacteristicName],
      },
    ];
    expect(() =>
      getOccupationSkillPoints(skillPointsPattern, characteristic)
    ).toThrowError(
      `${noExistingCharacteristicName} is not an entity of Characteristic`
    );
  });
});
