// Codewars: Beginner Series #3 Sum of Numbers
// 7 kyu: https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum(a, b) {
  
  let result = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
}