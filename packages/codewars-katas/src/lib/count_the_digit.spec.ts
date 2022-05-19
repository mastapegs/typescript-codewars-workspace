import { digit_count } from "./count_the_digit";

function testing(actual: number, expected: number) {
  expect(actual).toEqual(expected);
}

describe("Fixed Tests", function () {
  it("Basic tests nbDig", function () {
    testing(digit_count(5750, 0), 4700);
    testing(digit_count(11011, 2), 9481);
    testing(digit_count(12224, 8), 7733);
    testing(digit_count(11549, 1), 11905);
  });
});
