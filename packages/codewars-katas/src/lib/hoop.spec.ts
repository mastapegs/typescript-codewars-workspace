import { hoopCount } from "./hoop";

describe("Keep up the hoop", () => {
  it("Fixed tests", () => {
    expect(hoopCount(6)).toEqual("Keep at it until you get it");
    expect(hoopCount(10)).toEqual("Great, now move on to tricks");
    expect(hoopCount(22)).toEqual("Great, now move on to tricks");
  });
});
