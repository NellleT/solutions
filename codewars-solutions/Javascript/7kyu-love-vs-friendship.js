// Codewars: Love vs friendship
// 7 kyu: https://www.codewars.com/kata/59706036f6e5d1e22d000016

function wordsToMarks(string){
    return string.split("").map((x) => x.charCodeAt() - 96).reduce((x, y) => x + y)
  }