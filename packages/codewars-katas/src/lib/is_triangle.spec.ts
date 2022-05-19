import { isTriangle } from "./is_triangle";

describe("PublicTest", function () {
  it("should pass basic tests", () => {
    expect(isTriangle(1, 2, 2)).toEqual(true);
    expect(isTriangle(7, 2, 2)).toEqual(false);
  });
});
