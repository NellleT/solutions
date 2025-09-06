// Codewars: Find the missing letter
// 6 kyu: https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array){
    let ascii = []
    for (let char of array) {
      ascii.push(char.charCodeAt(0));
    }
    for (let num = 0; num < ascii.length - 1; num++) {
      if (ascii[num] + 1 != ascii[num + 1]) {
        let sol = ascii[num] + 1
        return String.fromCharCode(sol);
      }
    }
  }