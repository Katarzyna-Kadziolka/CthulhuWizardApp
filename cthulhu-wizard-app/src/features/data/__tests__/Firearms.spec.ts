import { describe, expect, it } from "vitest";
import { getAllFirearms } from "../Firearms";

describe("getAllFirearms", () => {
  it("should return Firearms list with elements with specific pattern", () => {
    const firearms = getAllFirearms();
    const expectedPattern = /(^Firearms \(.+\)$)/;
    firearms.forEach((element) => {
      expect(element).toMatch(expectedPattern);
    });
  });
});
