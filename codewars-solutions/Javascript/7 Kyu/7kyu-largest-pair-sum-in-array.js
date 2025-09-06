// Codewars: Largest pair sum in array
// 7 kyu: https://www.codewars.com/kata/556196a6091a7e7f58000018

function largestPairSum (numbers) {
  return numbers.splice(numbers.indexOf(Math.max(...numbers)), 1)[0] + numbers.splice(numbers.indexOf(Math.max(...numbers)), 1)[0]
}