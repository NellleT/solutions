// Codewars: Expressions Matter
// 8 kyu: https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

function expressionMatter(a, b, c) {

  const first_exp = a + b + c;
  const second_exp = a * b * c;
  const third_exp = a + (b * c);
  const forth_exp = (a + b) * c;
  const fifth_exp = a * (b + c);
  
  return Math.max(first_exp, second_exp, third_exp, forth_exp, fifth_exp);
}