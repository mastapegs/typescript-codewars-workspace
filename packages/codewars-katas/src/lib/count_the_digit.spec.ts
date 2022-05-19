import { G964 } from "./count_the_digit";

function testing(actual: number, expected: number) {
  expect(actual).toEqual(expected);
}

describe("Fixed Tests", function () {
  it("Basic tests nbDig", function () {
    testing(G964.nbDig(5750, 0), 4700);
    testing(G964.nbDig(11011, 2), 9481);
    testing(G964.nbDig(12224, 8), 7733);
    testing(G964.nbDig(11549, 1), 11905);
  });
});
