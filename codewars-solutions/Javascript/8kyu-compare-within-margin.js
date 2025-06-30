// Codewars: Compare within margin
// 8 kyu: https://www.codewars.com/kata/56453a12fcee9a6c4700009c

function closeCompare(a, b, margin = 0){  

  if (Math.abs(a - b) <= margin) {
      return 0
  } else {
      if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    }
  }
}