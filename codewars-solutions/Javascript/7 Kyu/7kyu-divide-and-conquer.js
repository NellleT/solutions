// Codewars: Divide and Conquer
// 7 kyu: https://www.codewars.com/kata/57eaec5608fed543d6000021

function divCon(x){
  
  let strint = []
  let result = 0;
  
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
      strint.push(parseInt(x[i]))
    } else {
      result += x[i]
    }
  }
  
  return result - strint.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}