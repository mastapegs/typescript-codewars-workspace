import { enough } from "./bus";

describe("Tests: ", () => {
  it("Example Tests: ", () => {
    expect(enough(10, 5, 5)).toEqual(0);
    expect(enough(100, 60, 50)).toEqual(10);
    expect(enough(50, 15, 10)).toEqual(0);
  });
});
