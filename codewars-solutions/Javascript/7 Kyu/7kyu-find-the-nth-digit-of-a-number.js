// Codewars: Find the nth Digit of a Number
// 7 kyu: https://www.codewars.com/kata/577b9960df78c19bca00007e

function findDigit(num, nth) {
  if (nth < 1) {
    return -1;
  }
  
  let reversed = num.toString().split("").reverse();
  let index = reversed.indexOf("-");
  
  if (index > -1) {
    reversed.splice(index, 1);
  }
  
  return nth > reversed.length ? 0 : parseInt(reversed[nth - 1]);
}