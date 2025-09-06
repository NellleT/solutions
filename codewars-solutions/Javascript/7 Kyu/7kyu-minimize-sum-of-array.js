// Codewars: Minimize Sum Of Array
// 7 kyu: https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

function minSum(arr) {
  
    let arr2 = [...arr];
    let nums = []; // Numbers
    
    while (arr2.length > 0) {
      nums.push(Math.max(...arr2) * Math.min(...arr2));
      arr2.splice(arr2.indexOf(Math.min(...arr2)), 1);
      arr2.splice(arr2.indexOf(Math.max(...arr2)), 1);
    }
    
    return nums.reduce((accumulator, currentValue) => accumulator + currentValue)
    
  }