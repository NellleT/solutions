// Codewars: You're a square!
// 7 kyu: https://www.codewars.com/kata/54c27a33fb7da0db0100040e

var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n)) ? true : false;
}