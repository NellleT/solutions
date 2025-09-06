// Codewars: Sum Arrays
// 8 kyu: https://www.codewars.com/kata/53dc54212259ed3d4f00071c

function sum (numbers) {
  return numbers.length == 0 ? 0 : numbers.reduce((acc, value) => acc + value);
}