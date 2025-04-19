// Codewars: Find the Remainder
// 8 kyu: https://www.codewars.com/kata/524f5125ad9c12894e00003f

function remainder(n, m) {
    let max = Math.max(n, m);
    let min = Math.min(n, m);
    if (min === 0) return NaN;
    return max % min;
  }