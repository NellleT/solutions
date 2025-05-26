// Codewars: Fake Binary
// 8 kyu: https://www.codewars.com/kata/57eae65a4321032ce000002d

function fakeBin(x){
  return x.split("").map((digit) => digit < '5' ? '0' : '1').join("")  
}