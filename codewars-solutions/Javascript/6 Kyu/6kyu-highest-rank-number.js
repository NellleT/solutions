// Codewars: Highest Rank Number in an Array
// 6 kyu: https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

function highestRank(arr){
  
  let maxCount = 0;
  let result = -Infinity;
  let map = new Map()
  
  for (let i = 0; arr.length > i; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1)
    } else {
      map.set(arr[i], 1)
    }
  }
  
  for (let [num, count] of map.entries()) {
    if (count > maxCount) {
      maxCount = count;
      result = num;
    } else if (count === maxCount && num > result) {
      result = num;
    }
  }
  
  return result
}