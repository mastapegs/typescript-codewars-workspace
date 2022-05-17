import { Kata } from "./vowel_count";

describe("getCount", function () {
  it("should pass a sample test", function () {
    expect(Kata.getCount("abracadabra")).toEqual(5);
  });
});
