// Codewars: Find the first non-consecutive number
// 8 kyu: https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive (arr) {
    for (let i = 1; arr.length > i; i++) {
      if (arr[i] - arr[i - 1] !== 1) {
        return arr[i]
      }
    } 
    return null
}