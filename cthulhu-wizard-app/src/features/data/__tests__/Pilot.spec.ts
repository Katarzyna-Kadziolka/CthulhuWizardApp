import { describe, expect, it } from "vitest";
import { getAllPilots } from "../Pilot";

describe("getAllPilots", () => {
  it("should return Pilots list with elements with specific pattern", () => {
    const pilots = getAllPilots();
    const expectedPattern = /(^Pilot \(.+\)$)/;
    pilots.forEach((element) => {
      expect(element).toMatch(expectedPattern);
    });
  });
});
