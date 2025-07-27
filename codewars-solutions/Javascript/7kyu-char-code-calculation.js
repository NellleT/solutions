// Codewars: Char Code Calculation
// 7 kyu: https://www.codewars.com/kata/57f75cc397d62fc93d000059

function calc(x){
  
  let total1 = [];
  
  for (let i = 0; x.length > i; i++) {
    total1.push(x[i].charCodeAt());
  }
  
  total1 = total1.join("");
  
  let total2 = total1.replaceAll("7", "1");
  
  return total1.split("").map(Number).reduce((v1, v2) => v1 + v2) - total2.split("").map(Number).reduce((v1, v2) => v1 + v2);
}