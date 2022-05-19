export class G964 {
  public static nbDig(n: number, d: number): number {
    const numbers = [];
    for (let i = 0; i <= n; i++) {
      numbers.push(i);
    }

    const squared_numbers = numbers.map((number) => Math.pow(number, 2));

    return squared_numbers.reduce((digit_count, current_square) => {
      return digit_count +
        current_square.toString().split("").filter((digit) =>
          digit === d.toString() ? true : false
        ).join("").length;
    }, 0);
  }
}
