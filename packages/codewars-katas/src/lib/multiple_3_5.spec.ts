import { multiple_3_5 } from "./multiple_3_5";

function test(num: number, expected: number) {
  expect(multiple_3_5(num)).toEqual(expected);
}

describe("solution", function () {
  it("should handle basic tests", function () {
    test(10, 23);
  });
});
