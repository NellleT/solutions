// Codewars: Maximum Product
// 7 kyu: https://www.codewars.com/kata/5a4138acf28b82aa43000117

function adjacentElementsProduct(array) {
  
  let result = array[0] * array[1];
  
  for (let i = 0; array.length - 1 > i; i++) {
    if (array[i] * array[i + 1] > result) {
      result = array[i] * array[i + 1];
    }
  }
  
  return result;
}