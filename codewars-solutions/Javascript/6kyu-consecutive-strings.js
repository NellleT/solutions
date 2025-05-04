// Codewars: Consecutive strings
// 6 kyu: https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
  
    if (k <= 0) {
      return ""
    }
    
    let result = ""
    
    for (let i = 0; i <= strarr.length - k; i++) {
      let subarr = strarr.slice(i, i + k);
      let combined = subarr.join('');
      if (result.length < combined.length) {
        result = combined
      }
    }
    return result
  }