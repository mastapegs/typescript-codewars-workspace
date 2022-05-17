import { reverseWords } from "./reverse_words";

describe("Sample Test Cases", function () {
  it("Should return a proper value", function () {
    expect(reverseWords("The quick brown fox jumps over the lazy dog."))
      .toEqual("ehT kciuq nworb xof spmuj revo eht yzal .god");
    expect(reverseWords("apple")).toEqual("elppa");
    expect(reverseWords("a b c d")).toEqual("a b c d");
    expect(reverseWords("double  spaced  words")).toEqual(
      "elbuod  decaps  sdrow",
    );
  });
});
