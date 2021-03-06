import type { OccupationSkillSpecification } from "./../../wizard/types/OccupationSkillSpecification";
import { describe, expect, it } from "vitest";
import { parse } from "../SkillParser";

describe("parse", () => {
  it("only one thing on list", () => {
    const occupationSkillSpecification: OccupationSkillSpecification = {
      howMany: 1,
      from: ["Dodge"],
    };
    const expectedResult = "Dodge";
    expect(parse(occupationSkillSpecification)).toBe(expectedResult);
  });
  it("one thing from list", () => {
    const occupationSkillSpecification: OccupationSkillSpecification = {
      howMany: 1,
      from: ["Dodge", "Swim", "Throw"],
    };
    const expectedResult = "One from: Dodge, Swim, Throw";
    expect(parse(occupationSkillSpecification)).toBe(expectedResult);
  });
  it("two thing from list", () => {
    const occupationSkillSpecification: OccupationSkillSpecification = {
      howMany: 2,
      from: ["Dodge", "Swim", "Throw"],
    };
    const expectedResult = "Two from: Dodge, Swim, Throw";
    expect(parse(occupationSkillSpecification)).toBe(expectedResult);
  });
});
