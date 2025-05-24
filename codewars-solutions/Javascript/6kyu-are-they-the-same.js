// Codewars: Are they the "same"?
// 6 kyu: https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2){
  
  if (array1 === null || array2 === null) {
    return false
  }
  
  let sort1 = array1.slice().sort((a, b) => a - b);
  let sort2 = array2.slice().sort((a, b) => a - b);
  
  for (let i = 0; i < sort1.length; i++) {
    if (sort1[i] ** 2 !== sort2[i]) return false;
  }
  return true;

}