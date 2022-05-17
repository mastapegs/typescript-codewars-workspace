function convertBase(base: string): string {
  switch (base) {
    case "T":
      return "U";
    default:
      return base;
  }
}

export function DNAtoRNA(dna: string): string {
  return dna.split("").map((char) => convertBase(char)).join("");
}
