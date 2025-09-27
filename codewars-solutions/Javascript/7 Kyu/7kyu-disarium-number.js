// Codewars: Disarium Number (Special Numbers Series #3)
// 7 kyu: https://www.codewars.com/kata/5a53a17bfd56cb9c14000003

function disariumNumber(n){
  
  let spl = n.toString().split("");
  let total = 0;
  
  for (let i = 0; i < spl.length; i++) {
    total += spl[i] ** (i + 1);
  }
  
  return total == n ? "Disarium !!" : "Not !!";
}