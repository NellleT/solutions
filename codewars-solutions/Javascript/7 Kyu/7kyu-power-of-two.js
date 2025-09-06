// Codewars: Power of two
// 7 kyu: https://www.codewars.com/kata/534d0a229345375d520006a0

function isPowerOfTwo(n) {
  return n > 0 && Number.isInteger(Math.log2(n));
}