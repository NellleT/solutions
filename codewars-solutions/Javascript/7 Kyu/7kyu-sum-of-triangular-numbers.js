// Codewars: Sum of Triangular Numbers
// 7 kyu: https://www.codewars.com/kata/580878d5d27b84b64c000b51

function sumTriangularNumbers(n) {
  
  let sum = 0;
  
  for (let k = 1; k <= n; k++) {
    let triangle = k * (k + 1) / 2;
    sum += triangle;
  }
  
  return sum
}