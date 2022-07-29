import type { SkillSpecification } from "./../../wizard/types/SkillSpecification";
import { describe, expect, it } from "vitest";
import { parse } from "../SkillParser";

describe("parse", () => {
  it("only one thing on list", () => {
    const skillSpecification: SkillSpecification = {
      howMany: 1,
      from: ["Dodge"],
    };
    const expectedResult = "Dodge";
    expect(parse(skillSpecification)).toBe(expectedResult);
  });
  it("one thing from list", () => {
    const skillSpecification: SkillSpecification = {
      howMany: 1,
      from: ["Dodge", "Swim", "Throw"],
    };
    const expectedResult = "One from: Dodge, Swim, Throw";
    expect(parse(skillSpecification)).toBe(expectedResult);
  });
  it("two thing from list", () => {
    const skillSpecification: SkillSpecification = {
      howMany: 2,
      from: ["Dodge", "Swim", "Throw"],
    };
    const expectedResult = "Two from: Dodge, Swim, Throw";
    expect(parse(skillSpecification)).toBe(expectedResult);
  });
});
