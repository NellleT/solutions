// Codewars: Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
// 8 kyu: https://www.codewars.com/kata/57faf7275c991027af000679

function remove(s, n) {
  let count = 0;
  return s.replace(/!/g, m => ++count <= n ? '' : m);
}