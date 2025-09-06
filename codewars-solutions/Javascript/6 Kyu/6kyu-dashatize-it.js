// Codewars: Dashatize it
// 6 kyu: https://www.codewars.com/kata/58223370aef9fc03fd000071

function dashatize(num) {
  
  let spl = Math.abs(num).toString().split("");
  let result = [];
  
  for (let i = 0; spl.length > i; i++) {
    if (spl[i] % 2 === 1) {
      result.push(`-${spl[i]}-`);
    } else {
      result.push(spl[i]);
    }
  }
  
  return result.join("").replace(/--+/g, "-").replace(/^-|-$/g, "");

}