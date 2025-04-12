// Codewars: Encrypt this!
// 6 kyu: https://www.codewars.com/kata/5848565e273af816fb000449

var encryptThis = function(text) {
  
    spl = text.split(" ");
    let result = [];
    let tempspl = [];
    
    for (let i = 0; spl.length > i; i++) {
      
      tempspl = spl[i].split("");
      tempspl[0] = tempspl[0].charCodeAt(0);
      
        if (tempspl.length > 2) {
          [tempspl[1], tempspl[tempspl.length - 1]] = [tempspl[tempspl.length - 1], tempspl[1]];
        }
  
      result.push(tempspl.join(""))
    }
    
    return result.join(" ")
  }