function range(n: number): Array<number> {
  return [...Array(n).keys()];
}

export function repeatStr(n: number, s: string): string {
  return range(n)
    .map(() => s)
    .reduce((repeatedStr, currString) => repeatedStr + currString, "");
}
