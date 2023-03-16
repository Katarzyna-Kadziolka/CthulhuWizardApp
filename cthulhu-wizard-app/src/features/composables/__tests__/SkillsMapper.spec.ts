import type { SkillSpecification } from "./../../wizard/types/SkillSpecification";
import { describe, expect, it } from "vitest";
import { mapSkills } from "../SkillsMapper";
import { getAllSkills } from "@/features/data/Occupation";
import { getAllArtCrafts } from "@/features/data/ArtCraft";
import { getAllFightings } from "@/features/data/Fighting";
import { getAllFirearms } from "@/features/data/Firearms";
import { getAllLanguages } from "@/features/data/Language";
import { getAllPilots } from "@/features/data/Pilot";
import { getAllSciences } from "@/features/data/Science";
import { getAllSurvivals } from "@/features/data/Survival";

describe("mapSkills", () => {
  it("Any", () => {
    const skillSpecification: SkillSpecification = {
      howMany: 1,
      from: ["Any"],
    };
    const expectedSkills = getAllSkills();
    const mappedSkillSpecification = mapSkills(skillSpecification);
    expect(mappedSkillSpecification.from.length).toBe(expectedSkills.length);
    mappedSkillSpecification.from.forEach((element) => {
      expect(expectedSkills.some((a) => a === element)).toBe(true);
    });
  });
  it("Art / Craft (Any)", () => {
    const skillSpecification: SkillSpecification = {
      howMany: 1,
      from: ["Art / Craft (Any)"],
    };
    const expectedSkills = getAllArtCrafts();
    const mappedSkillSpecification = mapSkills(skillSpecification);
    expect(mappedSkillSpecification.from.length).toBe(expectedSkills.length);
    mappedSkillSpecification.from.forEach((element) => {
      expect(expectedSkills.some((a) => a === element)).toBe(true);
    });
  });
  it("Fighting (Any)", () => {
    const skillSpecification: SkillSpecification = {
      howMany: 1,
      from: ["Fighting (Any)"],
    };
    const expectedSkills = getAllFightings();
    const mappedSkillSpecification = mapSkills(skillSpecification);
    expect(mappedSkillSpecification.from.length).toBe(expectedSkills.length);
    mappedSkillSpecification.from.forEach((element) => {
      expect(expectedSkills.some((a) => a === element)).toBe(true);
    });
  });
  it("Firearms (Any)", () => {
    const skillSpecification: SkillSpecification = {
      howMany: 1,
      from: ["Firearms (Any)"],
    };
    const expectedSkills = getAllFirearms();
    const mappedSkillSpecification = mapSkills(skillSpecification);
    expect(mappedSkillSpecification.from.length).toBe(expectedSkills.length);
    mappedSkillSpecification.from.forEach((element) => {
      expect(expectedSkills.some((a) => a === element)).toBe(true);
    });
  });
  it("Other Language (Any)", () => {
    const skillSpecification: SkillSpecification = {
      howMany: 1,
      from: ["Other Language (Any)"],
    };
    const expectedSkills = getAllLanguages();
    const mappedSkillSpecification = mapSkills(skillSpecification);
    expect(mappedSkillSpecification.from.length).toBe(expectedSkills.length);
    mappedSkillSpecification.from.forEach((element) => {
      expect(expectedSkills.some((a) => a === element)).toBe(true);
    });
  });
  it("Pilot (Any)", () => {
    const skillSpecification: SkillSpecification = {
      howMany: 1,
      from: ["Pilot (Any)"],
    };
    const expectedSkills = getAllPilots();
    const mappedSkillSpecification = mapSkills(skillSpecification);
    expect(mappedSkillSpecification.from.length).toBe(expectedSkills.length);
    mappedSkillSpecification.from.forEach((element) => {
      expect(expectedSkills.some((a) => a === element)).toBe(true);
    });
  });
  it("Science (Any)", () => {
    const skillSpecification: SkillSpecification = {
      howMany: 1,
      from: ["Science (Any)"],
    };
    const expectedSkills = getAllSciences();
    const mappedSkillSpecification = mapSkills(skillSpecification);
    expect(mappedSkillSpecification.from.length).toBe(expectedSkills.length);
    mappedSkillSpecification.from.forEach((element) => {
      expect(expectedSkills.some((a) => a === element)).toBe(true);
    });
  });
  it("Survival (Any)", () => {
    const skillSpecification: SkillSpecification = {
      howMany: 1,
      from: ["Survival (Any)"],
    };
    const expectedSkills = getAllSurvivals();
    const mappedSkillSpecification = mapSkills(skillSpecification);
    expect(mappedSkillSpecification.from.length).toBe(expectedSkills.length);
    mappedSkillSpecification.from.forEach((element) => {
      expect(expectedSkills.some((a) => a === element)).toBe(true);
    });
  });
});
