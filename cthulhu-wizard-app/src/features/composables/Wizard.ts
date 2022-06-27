import type { Characteristic } from "./../wizard/types/Characteristic";
import type { Investigator } from "./../wizard/types/Investigator";
import type * as yup from "yup";
import { computed } from "vue";
import { getSchemaFor } from "./Validation";

export function useWizard() {
  const getErrors = (data: Investigator | Characteristic) =>
    computed(() => {
      try {
        const schema = getSchemaFor(data);
        schema.validateSync(data, {
          abortEarly: false,
        });
        return [];
      } catch (error) {
        const validationError = error as yup.ValidationError;
        return validationError.inner;
      }
    });
  const getMovementRate = (
    strength: number,
    dexterity: number,
    size: number,
    age: number
  ) =>
    computed(() => {
      if (strength < size && dexterity < size) {
        return GetMovementRateWithAgeImpact(7, age);
      }
      if (strength > size && dexterity > size) {
        return GetMovementRateWithAgeImpact(9, age);
      }
      return GetMovementRateWithAgeImpact(8, age);
    });

  const getHitPoints = (constitution: number, size: number) =>
    computed(() => {
      return Math.floor((constitution + size) / 10);
    });

  const getSanity = (power: number) =>
    computed(() => {
      return power;
    });

  const getMagicPoints = (power: number) =>
    computed(() => {
      return Math.floor(power / 4);
    });

  return {
    getErrors,
    getMovementRate,
    getHitPoints,
    getSanity,
    getMagicPoints,
  };
}

function GetMovementRateWithAgeImpact(
  movementRate: number,
  age: number
): number {
  if (age < 40) {
    return movementRate;
  }
  if (age < 50) {
    return movementRate - 1;
  }
  if (age < 60) {
    return movementRate - 2;
  }
  if (age < 70) {
    return movementRate - 3;
  }
  if (age < 80) {
    return movementRate - 4;
  }
  if (age < 90) {
    return movementRate - 5;
  }
  throw Error("Age has invalid value");
}
