// Codewars: Odd-Even String Sort
// 7 kyu: https://www.codewars.com/kata/580755730b5a77650500010c


function sortMyString(S) {
  
  let spl = S.split("");
  let even = [];
  let odd = [];
  
  for (let i = 0; spl.length > i; i++) {
    if (i % 2 === 0) {
      even.push(spl[i]);
    } else {
      odd.push(spl[i]);
    }
  }
  
  return even.join("") + " " + odd.join("");
}