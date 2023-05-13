//Problem 4 - Roman Numerals
//Tulis program Javascript untuk mengkonversi dari angka normal ke Angka Romawi!

const romanNumeralIndex: [number, string][] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

function romanNumeral(value: number): string {
  let romanNumeral = "";

  for (const [normal, roman] of romanNumeralIndex) {
    while (value >= normal) {
      romanNumeral += roman;
      value -= normal;
    }
  }
  return romanNumeral;
}
console.log(romanNumeral(47));
