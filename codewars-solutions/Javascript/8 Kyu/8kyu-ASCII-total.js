// Codewars: ASCII Total
// 8 kyu: https://www.codewars.com/kata/572b6b2772a38bc1e700007a


function uniTotal(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum
}