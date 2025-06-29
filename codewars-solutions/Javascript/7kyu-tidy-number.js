// Codewars: Tidy Number (Special Numbers Series #9)
// 7 kyu: https://www.codewars.com/kata/5a87449ab1710171300000fd
// Definition: A Tidy Number is a number whose digits are in non-decreasing order.

function tidyNumber(n){
  
  let spl = n.toString().split("");
  
  for (let i = spl.length; 0 < i; i--) {
    if (parseInt(spl[i]) < parseInt(spl[i - 1])) {
      return false;
    }
  }
  
  return true;
}