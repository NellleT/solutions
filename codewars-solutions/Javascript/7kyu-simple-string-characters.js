// Codewars: Simple string characters
// 7 kyu: https://www.codewars.com/kata/5a29a0898f27f2d9c9000058

function solve(s){
  let uppercase = (s.match(/[A-Z]/g) || []).length;
  let lowercase = (s.match(/[a-z]/g) || []).length;
  let digits    = (s.match(/[0-9]/g) || []).length;
  let special   = (s.match(/[^A-Za-z0-9]/g) || []).length;
  
  return [uppercase, lowercase, digits, special];
}