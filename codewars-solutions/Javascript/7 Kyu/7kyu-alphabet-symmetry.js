// Codewars: Alphabet symmetry
// 7 kyu: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0

function solve(arr){
  return arr.map(word => {
    word = word.toLowerCase();
    return word.split('').filter((char, i) => char.charCodeAt(0) - 97 === i).length;
  });
}