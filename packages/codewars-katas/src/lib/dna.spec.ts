import { DNAtoRNA } from "./dna";

describe("Sample Test Cases", () => {
  it("Should return a string", () => {
    expect(DNAtoRNA("TTTT")).toEqual("UUUU");
    expect(DNAtoRNA("GCAT")).toEqual("GCAU");
    expect(DNAtoRNA("GACCGCCGCC")).toEqual("GACCGCCGCC");
  });
});
