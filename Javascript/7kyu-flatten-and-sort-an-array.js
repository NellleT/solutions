"use strict";
// Codewars: Flatten and sort an array
// 7 kyu: https://www.codewars.com/kata/57ee99a16c8df7b02d00045f


function flattenAndSort(array) {
  let num = array.flat().sort((a, b) => a - b)
  return num
}