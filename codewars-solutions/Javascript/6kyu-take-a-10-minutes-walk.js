// Codewars: Take a Ten Minutes Walk
// 6 kyu: https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  
  if (walk.length > 10) {
    return false
  } else if (walk.length < 10) {
    return false
  }
  
  let n = 0;
  let s = 0;
  let e = 0;
  let w = 0;
  
  for (let i = 0; walk.length > i; i++) {
    if (walk[i] == 'n') {
      n++;
    } else if (walk[i] == 's') {
      s++;
    } else if (walk[i] == 'e') {
      e++;
    } else {
      w++;
    }
  }
  
  if (n - s == 0 && e - w == 0) {
    return true
  } else if (s - n == 0 && w - e == 0) {
    return true
  } else {
    return false
  }
}