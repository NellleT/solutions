// Codewars: Decipher this!
// 6 kyu: https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
  
  let spl = str.split(" ");
  
  for (let i = 0; spl.length > i; i++) {
    let word = spl[i];
    
    let code = parseInt(spl[i].match(/^\d+/)[0]);
    let char = String.fromCharCode(code);
    
    let rest = word.replace(/^\d+/, '');

    let temp_spl = rest.split("");
    
    if (temp_spl.length >= 2) {
      let temp = temp_spl[0];
      temp_spl[0] = temp_spl[temp_spl.length - 1];
      temp_spl[temp_spl.length - 1] = temp;
    }
    
    spl[i] = char + temp_spl.join('');
  }
  
  return spl.join(" ");
}