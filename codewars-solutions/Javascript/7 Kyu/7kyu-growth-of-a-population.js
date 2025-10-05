// Codewars: Growth of a Population
// 7 kyu: https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
  if (p <= p0) return 0;
  
  let years = 0;
  
  while (true) {
    if (p0 < p) {
      p0 += Math.floor(p0 * percent / 100) + aug;
      years++;
    } else {
      return years;
    }
  }
}