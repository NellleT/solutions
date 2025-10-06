// Codewars: Sum of differences in array
// 8 kyu: https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

function sumOfDifferences(arr) {
  
  if (arr.length <= 1) return 0;
  
  let sortedArr = arr.sort((a, b) => a - b).reverse();
  let result = 0;
  
  for (let i = 0; i < sortedArr.length - 1; i++) {
    let pair = sortedArr[i] - sortedArr[i + 1];
    result += pair;
  }
  
  return result;
}