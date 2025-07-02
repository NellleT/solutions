// Codewars: Power
// 8 kyu: https://www.codewars.com/kata/562926c855ca9fdc4800005b

function numberToPower(number, power){
  
  if (power == 0) {
    return 1;
  }
  
  let result = number;
  
  for (let i = 1; i < power; i++) {
    result *= number;
  }
  
  return result
}