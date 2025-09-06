// Codewars: Check same case
// 8 kyu: https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

function sameCase(a, b) {
  
  if (!isLetter(a) || !isLetter(b)) {
    return -1;
  }

  const bothLower = a === a.toLowerCase() && b === b.toLowerCase();
  const bothUpper = a === a.toUpperCase() && b === b.toUpperCase();

  if (bothLower || bothUpper) {
    return 1;
  }

  return 0;
}

function isLetter(c) {
    return /^[a-zA-Z]$/.test(c);
}