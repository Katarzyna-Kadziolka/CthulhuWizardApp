import { Build } from "./../../wizard/types/Build";
import { DamageBonus } from "./../../wizard/types/DamageBonus";
import exp from "constants";
import { assert, describe, expect, it, test } from "vitest";
import { useWizard } from "../Wizard";

const {
  getMovementRate,
  getHitPoints,
  getSanity,
  getMagicPoints,
  getDamageBonus,
  getBuild,
} = useWizard();

describe("getMovementRate", () => {
  it("strength and dexterity less than size, age less than 40, should return 7", () => {
    const strength = 50;
    const dexterity = 50;
    const size = 70;
    const age = 30;
    const expectedResult = 7;
    expect(getMovementRate(strength, dexterity, size, age)).toBe(
      expectedResult
    );
  });
  it("strength less than size, dexterity equal size, age less than 40, should return 8", () => {
    const strength = 50;
    const dexterity = 70;
    const size = 70;
    const age = 30;
    const expectedResult = 8;
    expect(getMovementRate(strength, dexterity, size, age)).toBe(
      expectedResult
    );
  });
  it("dexterity less than size, strength equal size, age less than 40, should return 8", () => {
    const strength = 70;
    const dexterity = 50;
    const size = 70;
    const age = 30;
    const expectedResult = 8;
    expect(getMovementRate(strength, dexterity, size, age)).toBe(
      expectedResult
    );
  });
  it("strength and dexterity equal size, age less than 40, should return 8", () => {
    const strength = 70;
    const dexterity = 70;
    const size = 70;
    const age = 30;
    const expectedResult = 8;
    expect(getMovementRate(strength, dexterity, size, age)).toBe(
      expectedResult
    );
  });
  it("strength and dexterity more than size, age less than 40, should return 9", () => {
    const strength = 80;
    const dexterity = 80;
    const size = 70;
    const age = 30;
    const expectedResult = 9;
    expect(getMovementRate(strength, dexterity, size, age)).toBe(
      expectedResult
    );
  });
  it("strength and dexterity less than size, age in range 40-49, should return 6", () => {
    const strength = 50;
    const dexterity = 50;
    const size = 70;
    const age = 40;
    const expectedResult = 6;
    expect(getMovementRate(strength, dexterity, size, age)).toBe(
      expectedResult
    );
  });
  it("strength and dexterity less than size, age in range 50-59, should return 5", () => {
    const strength = 50;
    const dexterity = 50;
    const size = 70;
    const age = 50;
    const expectedResult = 5;
    expect(getMovementRate(strength, dexterity, size, age)).toBe(
      expectedResult
    );
  });
  it("strength and dexterity less than size, age in range 60-69, should return 4", () => {
    const strength = 50;
    const dexterity = 50;
    const size = 70;
    const age = 60;
    const expectedResult = 4;
    expect(getMovementRate(strength, dexterity, size, age)).toBe(
      expectedResult
    );
  });
  it("strength and dexterity less than size, age in range 70-79, should return 3", () => {
    const strength = 50;
    const dexterity = 50;
    const size = 70;
    const age = 70;
    const expectedResult = 3;
    expect(getMovementRate(strength, dexterity, size, age)).toBe(
      expectedResult
    );
  });
  it("strength and dexterity less than size, age bigger than 80, should return 2", () => {
    const strength = 50;
    const dexterity = 50;
    const size = 70;
    const age = 80;
    const expectedResult = 2;
    expect(getMovementRate(strength, dexterity, size, age)).toBe(
      expectedResult
    );
  });
});

describe("getHitPoints", () => {
  it("should return sum of constitution and size, divided by 10, rounded down", () => {
    const constitution = 45;
    const size = 44;
    const expectedResult = 8;
    expect(getHitPoints(constitution, size)).toBe(expectedResult);
  });
});

describe("getSanity", () => {
  it("should return power value", () => {
    const power = 84;
    const expectedResult = 84;
    expect(getSanity(power)).toBe(expectedResult);
  });
});

describe("getMagicPoints", () => {
  it("should return 1/5 power value, rounded down", () => {
    const power = 84;
    const expectedResult = 16;
    expect(getMagicPoints(power)).toBe(expectedResult);
  });
});

describe("getDamageBonus", () => {
  it("sum strength and size less than 65, should return minus two", () => {
    const strength = 32;
    const size = 32;
    const expectedResult = DamageBonus.MinusTwo;
    expect(getDamageBonus(strength, size)).toBe(expectedResult);
  });
  it("sum strength and size in range 65-84, should return minus one", () => {
    const strength = 32;
    const size = 33;
    const expectedResult = DamageBonus.MinusOne;
    expect(getDamageBonus(strength, size)).toBe(expectedResult);
  });
  it("sum strength and size in range 85-124, should return zero", () => {
    const strength = 42;
    const size = 43;
    const expectedResult = DamageBonus.Zero;
    expect(getDamageBonus(strength, size)).toBe(expectedResult);
  });
  it("sum strength and size in range 125-164, should return plus one dice four", () => {
    const strength = 62;
    const size = 63;
    const expectedResult = DamageBonus.PlusOneDiceFour;
    expect(getDamageBonus(strength, size)).toBe(expectedResult);
  });
  it("sum strength and size in range 165-204, should return plus one dice six", () => {
    const strength = 82;
    const size = 83;
    const expectedResult = DamageBonus.PlusOneDiceSix;
    expect(getDamageBonus(strength, size)).toBe(expectedResult);
  });
  it("sum strength and size more than 204, should throw error", () => {
    const strength = 102;
    const size = 103;
    expect(() => getDamageBonus(strength, size)).toThrowError(
      "Invalid strength or size value"
    );
  });
});

describe("getBuild", () => {
  it("sum strength and size less than 65, should return minus two", () => {
    const strength = 32;
    const size = 32;
    const expectedResult = Build.MinusTwo;
    expect(getBuild(strength, size)).toBe(expectedResult);
  });
  it("sum strength and size in range 65-84, should return minus one", () => {
    const strength = 32;
    const size = 33;
    const expectedResult = Build.MinusOne;
    expect(getBuild(strength, size)).toBe(expectedResult);
  });
  it("sum strength and size in range 85-124, should return zero", () => {
    const strength = 42;
    const size = 43;
    const expectedResult = Build.Zero;
    expect(getBuild(strength, size)).toBe(expectedResult);
  });
  it("sum strength and size in range 125-164, should return one", () => {
    const strength = 62;
    const size = 63;
    const expectedResult = Build.One;
    expect(getBuild(strength, size)).toBe(expectedResult);
  });
  it("sum strength and size in range 165-204, should return two", () => {
    const strength = 82;
    const size = 83;
    const expectedResult = Build.Two;
    expect(getBuild(strength, size)).toBe(expectedResult);
  });
  it("sum strength and size more than 204, should throw error", () => {
    const strength = 102;
    const size = 103;
    expect(() => getBuild(strength, size)).toThrowError(
      "Invalid strength or size value"
    );
  });
});
