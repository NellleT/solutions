// Codewars: Fuel Calculator: Total Cost
// 8 kyu: https://www.codewars.com/kata/57b58827d2a31c57720012e8

function fuelPrice(litres, pricePerLitre) {
  
  let discount = Math.min(0.25, Math.floor(litres / 2) * 0.05);
  let total = litres * (pricePerLitre - discount);
  
  return parseFloat(total.toFixed(2));
}