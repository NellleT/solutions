// Codewars: Sum of Cubes
// 7 kyu: https://www.codewars.com/kata/59a8570b570190d313000037

function sumCubes(n) {
    if (n == 1) {
      return 1
    }
    let sum = []
    for (let i = 1; i <= n; i++) {
      sum.push(i ** 3)
    }
    let result = 0
    for (let j = 0; j < sum.length; j++) {
      result += sum[j]
    }
    return result
  }