// Codewars: Grasshopper - Summation
// 8 kyu: https://www.codewars.com/kata/55d24f55d7dd296eb9000030

var summation = function (num) {
  let total = 0;
  for (let i = 0; num >= i; i++) {
    total += i;
  }
  
  return total;
}