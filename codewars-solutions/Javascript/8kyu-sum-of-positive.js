// Codewars: Sum of positive
// 8 kyu: https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  return arr.reduce((partialSum, a) => a > 0 ? partialSum + a : partialSum, 0);
}