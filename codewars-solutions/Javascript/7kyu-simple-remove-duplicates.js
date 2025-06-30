// Codewars: Simple remove duplicates
// 7 kyu: https://www.codewars.com/kata/5ba38ba180824a86850000f7

function solve(arr) {
  return arr.filter((value, index) => arr.lastIndexOf(value) === index);
}