// Codewars: Most digits
// 7 kyu: https://www.codewars.com/kata/58daa7617332e59593000006

function findLongest(array) {
    return array.reduce((a, x) => x.toString().length > a.toString().length ? x : a);
  }