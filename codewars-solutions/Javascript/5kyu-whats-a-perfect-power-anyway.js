// Codewars: What's a Perfect Power anyway?
// 5 kyu: https://www.codewars.com/kata/54d4c8b08776e4ad92000835

function isPP(n){
  
  let m = 0;
  
  for (let k = 2; k < Math.floor(Math.log2(n)) + 1; k++) {
    m = n ** (1 / k)
    let rounded = Math.round(m)
    if (rounded ** k === n) {
      return [rounded, k]
    }
  }
  
  return null
}