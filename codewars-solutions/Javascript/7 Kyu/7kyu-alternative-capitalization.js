// Codewars: Alternate capitalization
// 7 kyu: https://www.codewars.com/kata/59cfc000aeb2844d16000075

function capitalize(s) {
    const spl = s.split("");
    let odd = [];
    let even = [];
    
    for (let i = 0; i < spl.length; i++) {
      if (i % 2 === 0) {
        even.push(spl[i].toUpperCase());
        odd.push(spl[i].toLowerCase());
      } else {
        even.push(spl[i].toLowerCase());
        odd.push(spl[i].toUpperCase());
      }
    }
    
    return [even.join(""), odd.join("")];
  }