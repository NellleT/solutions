// Codewars: Shortest Word
// 7 kyu: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s){
  
  let result = Infinity;
  let spl = s.split(" ");
  
  for (let i = 0; spl.length > i; i++) {
    if (spl[i].length < result) {
      result = spl[i].length;
    }
  }
  
  return result;
}