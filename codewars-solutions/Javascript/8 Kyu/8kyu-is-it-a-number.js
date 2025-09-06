// Codewars: Is it a number?
// 8 kyu: https://www.codewars.com/kata/57126304cdbf63c6770012bd

function isDigit(s) {
  s = s.trim();
  return !isNaN(s) && s !== '';
}