import { describe, expect, it } from "vitest";
import { getAllSurvivals } from "../Survival";

describe("getAllSurvivals", () => {
  it("should return Survivals list with elements with specific pattern", () => {
    const survivals = getAllSurvivals();
    const expectedPattern = /(^Survival \(.+\)$)/;
    survivals.forEach((element) => {
      expect(element).toMatch(expectedPattern);
    });
  });
});
