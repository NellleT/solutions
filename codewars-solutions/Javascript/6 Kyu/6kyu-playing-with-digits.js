// Codewars: Playing with digits
// 6 kyu: https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p) {
    let sum = n.toString()
                .split('')
                .map((digit, index) => Math.pow(parseInt(digit), p + index))
                .reduce((acc, val) => acc + val, 0);
    
    return sum % n === 0 ? sum / n : -1;
}