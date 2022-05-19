import { rowSumOddNumbers } from "./odd_triangle";

describe("basic tests", function () {
  it("Testing for 1", () => expect(rowSumOddNumbers(1)).toEqual(1));
  it("Testing for 2", () => expect(rowSumOddNumbers(2)).toEqual(8));
  it("Testing for 13", () => expect(rowSumOddNumbers(13)).toEqual(2197));
  it("Testing for 19", () => expect(rowSumOddNumbers(19)).toEqual(6859));
  it("Testing for 41", () => expect(rowSumOddNumbers(41)).toEqual(68921));
  it("Testing for 42", () => expect(rowSumOddNumbers(42)).toEqual(74088));
  it("Testing for 74", () => expect(rowSumOddNumbers(74)).toEqual(405224));
  it("Testing for 86", () => expect(rowSumOddNumbers(86)).toEqual(636056));
  it("Testing for 93", () => expect(rowSumOddNumbers(93)).toEqual(804357));
  it("Testing for 101", () => expect(rowSumOddNumbers(101)).toEqual(1030301));
});
