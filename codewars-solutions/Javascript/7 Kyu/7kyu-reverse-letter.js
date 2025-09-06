// Codewars: Simple Fun #176: Reverse Letter
// 7 kyu: https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

function reverseLetter(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");
    spl = str.split('')
    for (let i = spl.length; 0 <= i; i--) {
      if (alphabetArray.includes(spl[i])) {
        continue
      } else {
        spl.splice(i, 1)
      }
    }
    return spl.reverse().join("")
  }