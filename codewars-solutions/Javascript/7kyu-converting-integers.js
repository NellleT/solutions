// Codewars: Convert an array of strings to array of numbers
// 7 kyu: https://www.codewars.com/kata/5783d8f3202c0e486c001d23

function toNumberArray(stringarray){
  return stringarray.map((elem) => parseFloat(elem))
}