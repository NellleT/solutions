// Codewars: Switcheroo
// 7 kyu: https://www.codewars.com/kata/57f759bb664021a30300007d

function switcheroo(str) {

  let result = ''

  for (let i = 0; i < str.length; i++) {
    
    let char = str[i];
 
    if (char === 'a') {
      result += 'b';
    } else if (char === 'b') {
      result += 'a';
    } else {
      result += char;
    }
  }
  
  return result
}