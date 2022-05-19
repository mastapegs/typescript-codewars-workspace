export function multiple_3_5(number: number) {
  if (number < 0) return 0;

  const multiples_of_3_or_5 = [];
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) multiples_of_3_or_5.push(i);
  }

  return multiples_of_3_or_5.reduce((accu, curr) => accu + curr, 0);
}
