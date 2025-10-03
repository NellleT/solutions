// Codewars: Folding your way to the moon
// 7 kyu: https://www.codewars.com/kata/58f0ba42e89aa6158400000e

function foldTo(distance) {
  if (distance < 0) return null;
  
  let fold = 0.0001;
  let counter = 0;
  
  while (true) {
    if (fold >= distance) {
      return counter;
    }
    
    fold *= 2;
    counter++;
  }
}