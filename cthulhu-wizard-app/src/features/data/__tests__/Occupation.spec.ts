import { describe, expect, it } from "vitest";
import { getAllSkills } from "../Occupation";
import { getAllArtCrafts } from "../ArtCraft";
import { getAllFightings } from "../Fighting";
import { getAllFirearms } from "../Firearms";
import { getAllLanguages } from "../Language";
import { getAllPilots } from "../Pilot";
import { getAllSciences } from "../Science";
import { getAllSurvivals } from "../Survival";

describe("getAllSkills", () => {
  it("should return Occupations list contains elements with specific pattern", () => {
    const occupations = getAllSkills();
    const artCraftPattern = /(^Art \/ Craft \(.+\)$)/;
    const fightingPattern = /(^Fighting \(.+\)$)/;
    const firearmsPattern = /(^Firearms \(.+\)$)/;
    const languagesPattern = /(^Other Language \(.+\)$)/;
    const pilotsPattern = /(^Pilot \(.+\)$)/;
    const sceincesPattern = /(^Science \(.+\)$)/;
    const survivalsPattern = /(^Survival \(.+\)$)/;

    expect(occupations.some((element) => artCraftPattern.test(element))).toBe(
      true
    );
    expect(occupations.some((element) => fightingPattern.test(element))).toBe(
      true
    );
    expect(occupations.some((element) => firearmsPattern.test(element))).toBe(
      true
    );
    expect(occupations.some((element) => languagesPattern.test(element))).toBe(
      true
    );
    expect(occupations.some((element) => pilotsPattern.test(element))).toBe(
      true
    );
    expect(occupations.some((element) => sceincesPattern.test(element))).toBe(
      true
    );
    expect(occupations.some((element) => survivalsPattern.test(element))).toBe(
      true
    );

    const artCrafts = getAllArtCrafts();
    const fightings = getAllFightings();
    const firearms = getAllFirearms();
    const languages = getAllLanguages();
    const pilots = getAllPilots();
    const sciences = getAllSciences();
    const survivals = getAllSurvivals();

    const importOccupations = artCrafts.concat(
      fightings,
      firearms,
      languages,
      pilots,
      sciences,
      survivals
    );

    expect(occupations.length).toBeGreaterThan(importOccupations.length);
  });
});
