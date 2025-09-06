// Codewars: Even numbers in an array
// 7 kyu: https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c

function evenNumbers(array, number) {
  
  let newarr = [];
  
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 == 0) {
      newarr.push(array[i])
    }
  }
  
  return newarr.slice(0, number).reverse()
}