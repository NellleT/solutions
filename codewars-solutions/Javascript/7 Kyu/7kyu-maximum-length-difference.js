// Codewars: Maximum Length Difference
// 7 kyu: https://www.codewars.com/kata/5663f5305102699bad000056

function mxdiflg(a1, a2) {
  
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  let maxA1 = Math.max(...a1.map(s => s.length));
  let minA1 = Math.min(...a1.map(s => s.length));
  let maxA2 = Math.max(...a2.map(s => s.length));
  let minA2 = Math.min(...a2.map(s => s.length));

  return Math.max(Math.abs(maxA1 - minA2), Math.abs(maxA2 - minA1));
}