// Codewars: Sort Out The Men From Boys
// 7 kyu: https://www.codewars.com/kata/5af15a37de4c7f223e00012d

function menFromBoys(arr){
  
  let result = [];
  let uniqueArr = [...new Set(arr)];
  
  let even = uniqueArr.filter(x => x % 2 === 0);
  let odd = uniqueArr.filter(x => x % 2 !== 0);
  result.push(even.sort((a, b) => a - b), odd.sort((a, b) => b - a));
  
  return result.flat();
}