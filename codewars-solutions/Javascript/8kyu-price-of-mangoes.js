// Codewars: Price of Mangoes
// 8 kyu: https://www.codewars.com/kata/57a77726bb9944d000000b06

function mango(quantity, price) {
  const paidMangoes = quantity - Math.floor(quantity / 3);
  return paidMangoes * price;
}
