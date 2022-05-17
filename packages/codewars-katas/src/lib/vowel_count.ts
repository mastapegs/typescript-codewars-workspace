export class Kata {
  static getCount(str: string): number {
    return str.split("").reduce((vowelCount, char) => {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        return vowelCount + 1;
      }
      return vowelCount;
    }, 0);
  }
}
