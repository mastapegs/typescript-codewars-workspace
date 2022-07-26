import { divisors } from "./divisors";

describe("Sample Test Cases", () => {
  it("Tests divisor fn", () => {
    expect(divisors(1)).toEqual(1);
    expect(divisors(2)).toEqual(2);
    expect(divisors(3)).toEqual(2);
    expect(divisors(4)).toEqual(3);
    expect(divisors(5)).toEqual(2);
    expect(divisors(6)).toEqual(4);
  });
});
