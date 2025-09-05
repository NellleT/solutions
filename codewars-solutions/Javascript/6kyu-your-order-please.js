// Codewars: Your order, please
// 6 kyu: https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words){
  if (words === "") {
    return "";
  }
  
  let spl = words.split(" ");
  let result = [];
  
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j < spl.length; j++) {
      if (spl[j].includes(i.toString()))  { 
        result.push(spl[j]);
      }
    }
  }
  
  return result.join(" ");
}