// Codewars: How old will I be in 2099?
// 8 kyu: https://www.codewars.com/kata/5761a717780f8950ce001473

function  calculateAge(a, b) {
  if (a - b == 1) {
    return 'You will be born in 1 year.'
  }
  
  if (a == b) {
    return 'You were born this very year!'
  }
  
  if (b - a == 1) {
    return 'You are 1 year old.'
  }
  
  return b > a ? `You are ${b - a} years old.` : `You will be born in ${a - b} years.`

}
