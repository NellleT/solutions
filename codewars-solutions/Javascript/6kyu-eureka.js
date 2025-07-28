// Codewars: Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
// 6 kyu: https://www.codewars.com/kata/5626b561280a42ecc50000d1

function sumDigPow(a, b) {
  
  let result = [];
  
  for (let i = a; i <= b; i++) {
    
    let temp = i.toString().split("");
    temp = temp.map(Number).reduce((sum, digit, index) => sum + Math.pow(Number(digit), index + 1), 0);
    
    if (temp === i) {
      result.push(i);
    }
  }
  
  return result;
}