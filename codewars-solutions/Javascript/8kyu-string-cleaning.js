// Codewars: String cleaning
// 8 kyu: https://www.codewars.com/kata/57e1e61ba396b3727c000251

function stringClean(s) {
    return s.split("").filter(char => !/\d/.test(char)).join("");
  }