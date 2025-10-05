// Codewars: Product of consecutive Fib numbers
// 5 kyu: https://www.codewars.com/kata/5541f58a944b85ce6d00006a

function productFib(prod){
  
  let fib = [0, 1]; // Initialize array

  for (let i = 2; i <= Infinity; i++) {
    
    fib[i] = fib[i - 2] + fib[i - 1];
    
    if ((fib[i - 2] + fib[i - 1]) * (fib[i - 1] + fib[i]) == prod) {
      return [(fib[i - 2] + fib[i - 1]), (fib[i - 1] + fib[i]), true];
    } else if ((fib[i - 2] + fib[i - 1]) * (fib[i - 1] + fib[i]) > prod) {
      return [(fib[i - 2] + fib[i - 1]), (fib[i - 1] + fib[i]), false];
    }
  }
}