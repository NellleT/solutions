// Codewars: The Supermarket Queue
// 6 kyu: https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
  
  let tills = Array(n).fill(0);
  
  for (let i = 0; i < customers.length; i++) {
    let index = tills.indexOf(Math.min(...tills));
    tills[index] += customers[i];
  }
  
  return Math.max(...tills);
}