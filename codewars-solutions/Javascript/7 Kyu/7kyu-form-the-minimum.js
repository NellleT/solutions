// Codewars: Form The Minimum
// 7 kyu: https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values){
    let min = []
    for (let i = 0; values.length > i; i++) {
      if (min.includes(values[i])) {
        continue
      } else {
        min.push(values[i])
      }
    
    }
    let sorted = min.sort().join("")
    return parseInt(sorted)
  }