// Codewars: Filter the number
// 7 kyu: https://www.codewars.com/kata/55b051fac50a3292a9000025

function filterString(value) {
  
  let result = [];
  let spl = value.split("");
  
  for (let i = 0; spl.length > i; i++) {
    if (!isNaN(spl[i]) && spl[i].trim() !== '') {
      result.push(spl[i])
    }
  }
  
  return parseInt(result.join(""))
}