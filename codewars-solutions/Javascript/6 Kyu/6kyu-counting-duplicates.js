// Codewars: Counting Duplicates
// 6 kyu: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){

    let map = new Map();
    let textlowercase = text.toLowerCase();
    let duplicates = 0;

    for (let i = 0; i < textlowercase.length; i++) {
      if (map.has(textlowercase[i])) {
        map.set(textlowercase[i], map.get(textlowercase[i]) + 1);
      } else {
        map.set(textlowercase[i], 1);
      }
    }
    
    
    for (let value of map.values()) {
      if (value > 1) duplicates++;
    }
    
    return duplicates;
  
}