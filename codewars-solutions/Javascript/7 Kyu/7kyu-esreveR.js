// Codewars: esreveR
// 7 kyu: https://www.codewars.com/kata/5413759479ba273f8100003d

reverse = function(array) {
  return array.reduce((acc, x) => [x, ...acc], []);
}