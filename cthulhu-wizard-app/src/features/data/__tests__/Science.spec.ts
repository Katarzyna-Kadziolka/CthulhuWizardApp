import { describe, expect, it } from "vitest";
import { getAllSciences } from "../Science";

describe("getAllSciences", () => {
  it("should return Sciences list with elements with specific pattern", () => {
    const sciences = getAllSciences();
    const expectedPattern = /(^Science \(.+\)$)/;
    sciences.forEach((element) => {
      expect(element).toMatch(expectedPattern);
    });
  });
});
