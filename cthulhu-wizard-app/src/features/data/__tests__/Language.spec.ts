import { describe, expect, it } from "vitest";
import { getAllLanguages } from "../Language";

describe("getAllLanguages", () => {
  it("should return Languages list with elements with specific pattern", () => {
    const languages = getAllLanguages();
    const expectedPattern = /(^Other Language \(.+\)$)/;
    languages.forEach((element) => {
      expect(element).toMatch(expectedPattern);
    });
  });
});
