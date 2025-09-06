// Codewars: Count of positives / sum of negatives
// 8 kyu: https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
  
  if (input === null || input.length === 0) {
    return [];
  }
  
  let result = [0, 0];
  
  for (let i = 0; input.length > i; i++) {
    if (input[i] > 0) {
      result[0] += 1;
    } else {
      result[1] += input[i];
    }
  }
  
  return result
}