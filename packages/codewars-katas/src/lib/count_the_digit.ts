export function nbDig(n: number, d: number): number {
  const squared_numbers = [];
  for (let i = 0; i <= n; i++) {
    squared_numbers.push(i ** 2);
  }

  return squared_numbers.reduce((digit_count, current_square) => {
    return digit_count +
      current_square.toString().split("").filter((digit) =>
        digit === d.toString() ? true : false
      ).join("").length;
  }, 0);
}
