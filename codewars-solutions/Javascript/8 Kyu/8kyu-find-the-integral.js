// Codewars: Find the Integral
// 8 kyu: https://www.codewars.com/kata/59811fd8a070625d4c000013

function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`
}