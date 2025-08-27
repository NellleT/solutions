// Codewars: Tip Calculator
// 8 kyu: https://www.codewars.com/kata/56598d8076ee7a0759000087

function calculateTip(amount, rating) {
  let rates = {
    terrible: 0,
    poor: 0.05,
    good: 0.1,
    great: 0.15,
    excellent: 0.2
  };

  rating = rating.toLowerCase();

  if (!(rating in rates)) {
    return "Rating not recognised";
  }

  return Math.ceil(amount * rates[rating]);
}