import { describe, expect, it } from "vitest";
import { getAllArtCrafts } from "../ArtCraft";

describe("getAllArtCrafts", () => {
  it("should return Art Craft list with elements with specific pattern", () => {
    const artCrafts = getAllArtCrafts();
    const expectedPattern = /(^Art \/ Craft \(.+\)$)/;
    artCrafts.forEach((element) => {
      expect(element).toMatch(expectedPattern);
    });
  });
});
