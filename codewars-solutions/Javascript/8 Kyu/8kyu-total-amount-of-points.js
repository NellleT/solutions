// Codewars: Total amount of points
// 8 kyu: https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  
  let spl = games.join("").split(":").join("").split("");
  let total = 0;
  
  for (let i = 0; spl.length > i; i += 2) {
    if (parseInt(spl[i]) > parseInt(spl[i + 1])) {
      total += 3;
    } else if (parseInt(spl[i]) < parseInt(spl[i + 1])) {
      continue;
    } else {  
      total++;
    }
  }
  
  return total;
}