// Codewars: Duplicate Encoder
// 6 kyu: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word){
  
    let spl = word.toLowerCase().split("")
    let hash = new Map();
    let result = []
    
    for (let i = 0; i < spl.length; i++) {
      hash.set(spl[i], (hash.get(spl[i]) || 0) + 1);
    }
    
    for (let i = 0; i < spl.length; i++) {
      
      if (hash.get(spl[i]) < 2) {
        result.push("(")
      } else {
        result.push(")")
      }
    }
    
    return result.join("")
  }