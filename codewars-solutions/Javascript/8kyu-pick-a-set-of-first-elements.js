// Codewars: pick a set of first elements
// 8 kyu: https://www.codewars.com/kata/572b77262bedd351e9000076

function first(arr, n = 1) {
  return arr.length === 0 ? [] : arr.slice(0, n);
}