// Codewars: Digital cypher
// 7 kyu: https://www.codewars.com/kata/592e830e043b99888600002d

function encode(str,  n) {
  
  const spl = str.split("")
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const digits = n.toString().split("").map(Number);
  let result = [];
  
  for (let i = 0; i < spl.length; i++) {
    result.push(alphabet.indexOf(spl[i]) + 1);
  }
  
  for (let i = 0; i < spl.length; i++) {
    result[i] += digits[i % digits.length];
  }
  
  return result;
}