// Codewars: Difference of Volumes of Cuboids
// 8 kyu: https://www.codewars.com/kata/58cb43f4256836ed95000f97

function findDifference(a, b) {
  return Math.abs(a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y));
}