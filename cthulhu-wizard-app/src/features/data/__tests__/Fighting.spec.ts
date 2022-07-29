import { describe, expect, it } from "vitest";
import { getAllFightings } from "../Fighting";

describe("getAllFightings", () => {
  it("should return Fightings list with elements with specific pattern", () => {
    const fightings = getAllFightings();
    const expectedPattern = /(^Fighting \(.+\)$)/;
    fightings.forEach((element) => {
      expect(element).toMatch(expectedPattern);
    });
  });
});
