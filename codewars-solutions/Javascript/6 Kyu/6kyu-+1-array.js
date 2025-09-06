// Codewars: +1 Array
// 6 kyu: https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

function upArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  if (arr.some(d => !Number.isInteger(d) || d < 0 || d > 9)) return null;


  const res = arr.slice();
  let carry = 1;

  for (let i = res.length - 1; i >= 0 && carry; i--) {
    const t = res[i] + carry;
    res[i] = t % 10;
    carry = Math.floor(t / 10);
  }

  if (carry) res.unshift(carry);
  return res;
}