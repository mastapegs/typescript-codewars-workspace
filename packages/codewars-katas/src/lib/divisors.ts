function range(start: number, end: number): Array<number> {
  return [...Array(end - start + 1).keys()].map((i) => i + start);
}

export const divisors = (n: number): number =>
  range(1, n)
    .filter((divisor) => n % divisor === 0)
    .length;
