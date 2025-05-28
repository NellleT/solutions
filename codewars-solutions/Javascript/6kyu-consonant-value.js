// Codewars: Consonant value
// 6 kyu: https://www.codewars.com/kata/59c633e7dcc4053512000073

function solve(s) {
  
  let spl = s.split(/[aeiou]+/);
  let result = []
  
  
  for (let substr of spl) {
    
    let subsum = 0
    
    for (let char of substr) {
      
      let letter = char.charCodeAt(0) - 96
      subsum += letter
      
    }
    result.push(subsum);
  }

  return Math.max(...result)
};