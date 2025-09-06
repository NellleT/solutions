// Codewars: Area of a Square
// 8 kyu: https://www.codewars.com/kata/5748838ce2fab90b86001b1a

function squareArea(A){
  return +Math.pow((2 * A) / Math.PI, 2).toFixed(2);
}