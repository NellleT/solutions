// Codewars: Build a square
// 7 kyu: https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

function generateShape(integer){
  return Array(integer).fill("+".repeat(integer)).join("\n")
}