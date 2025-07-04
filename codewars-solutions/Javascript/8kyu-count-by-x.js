// Codewars: Count by X
// 8 kyu: https://www.codewars.com/kata/5513795bd3fafb56c200049e


function countBy(x, n) {
  return Array.from({ length: n }, (_, i) => x * (i + 1));
}
