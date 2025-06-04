// Codewars: validate code with simple regex
// 8 kyu: https://www.codewars.com/kata/56a25ba95df27b7743000016


function validateCode(code) {
  return code.toString().charAt(0) == "1" || code.toString().charAt(0) == "2" || code.toString().charAt(0) == "3" ? true : false
}