// Codewars: Gap in Primes
// 5 kyu: https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4

function gap(g, m, n) {
  
  let isPrime = Array(n - m + 1).fill(true);

  for (let i = 2; i * i <= n; i++) {
      let start = Math.max(i * i, Math.ceil(m / i) * i);
      for (let j = start; j <= n; j += i) {
          isPrime[j - m] = false;
        }
      }

  if (m === 1) {
    isPrime[0] = false;
  } 

  let primes = [];
  for (let i = 0; i < isPrime.length; i++) {
    if (isPrime[i]) {
      primes.push(m + i);
    } 
  }

  for (let k = 0; k < primes.length - 1; k++) {
      if (primes[k + 1] - primes[k] === g) {
        return [primes[k], primes[k + 1]];
      } 
    }

  return null;
}