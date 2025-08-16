// Codewars: Reverse or rotate?
// 6 kyu: https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

function revrot(str, sz) {
  
  if (sz <= 0 || sz === "") {
    return "";
  }
  
  let result = [];
  
  for (let i = 0; i < str.length; i += sz) {
    
    let chunk = str.slice(i, i + sz).split("").map((x) => parseInt(x));
    let sum = chunk.reduce((x, y) => x + y, 0);
    
    if (chunk.length < sz) {
      break;
    }
    
    if (sum % 2 === 0) {
      chunk = chunk.reverse()
    } else {
      let elem1 = chunk.shift();
      chunk.push(elem1); 
    }
    
    result.push(chunk);
  }
  
  return result.flat().join("");
}