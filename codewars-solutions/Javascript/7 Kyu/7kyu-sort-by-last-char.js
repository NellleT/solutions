// Codewars: Sort by Last Char
// 7 kyu: https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0

function last(x){
  return x.split(" ").sort((a, b) => a.at(-1).localeCompare(b.at(-1)));
}