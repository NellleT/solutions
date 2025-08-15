// Codewars: Multiplying numbers as strings
// 4 kyu: https://www.codewars.com/kata/55911ef14065454c75000062

function multiply(a, b){
  
  if (a == 0 || b == 0) {
    return "0";
  }
  
  let num1 = a.toString().split("");
  let num2 = b.toString().split("");
  let result = new Array(num1.length + num2.length).fill(0);
  
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      let temp = num1[i] * num2[j];
      result[i + j + 1] += temp;
    }
  }
  
  for (let i = result.length - 1; i >= 1; i--) {
    let carry = Math.floor(result[i] / 10);
    result[i] = result[i] % 10;
    result[i - 1] += carry;
  }
  
  return result.join("").replace(/^0+/, '');
}