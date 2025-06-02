// Codewars: Tortoise racing
// 6 kyu: https://www.codewars.com/kata/55e2adece53b4cdcb900006c

function race(v1, v2, g) {
  if (v1 >= v2) return null;

  let totalSeconds = Math.floor((g * 3600) / (v2 - v1));

  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return [hours, minutes, seconds];
}