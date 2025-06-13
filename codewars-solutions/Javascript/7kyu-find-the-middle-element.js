// Codewars: Find the middle element
// 7 kyu: https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(triplet) {
  let sorted = [...triplet].sort((a, b) => a - b);
  let middleValue = sorted[1];
  return triplet.indexOf(middleValue);
}