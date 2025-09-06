// Codewars: Find the vowels
// 7 kyu: https://www.codewars.com/kata/5680781b6b7c2be860000036

function vowelIndices(word){
  
  let spl = word.toLowerCase().split("");
  let result = [];
  
  for (let i = 0; spl.length > i; i++) {
    if (spl[i] == "a" || spl[i] == "e" || spl[i] == "i" || spl[i] == "o" || spl[i] == "u" || spl[i] == "y") {
      result.push(i + 1)
    }
  }
  
  return result;
}