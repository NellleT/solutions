// Codewars: Find Multiples of a Number
// 8 kyu: https://www.codewars.com/kata/58ca658cc0d6401f2700045f

function findMultiples(integer, limit) {
  
  let result = [];
  
  for (let i = 1; i < limit + 1; i++) {
    if (integer * i <= limit) {
      result.push(integer * i);
    }
  }
  
  return result;
}