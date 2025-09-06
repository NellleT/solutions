// Codewars: Pythagorean Triple
// 8 kyu: https://www.codewars.com/kata/5951d30ce99cf2467e000013

function isPythagoreanTriple(integers) {
  return Math.min(...integers) ** 2 + integers.slice().sort((a,b)=>a-b)[1] ** 2 === Math.max(...integers) ** 2 ? true : false;
}