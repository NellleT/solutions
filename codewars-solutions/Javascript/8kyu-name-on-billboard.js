// Codewars: Name on billboard
// 8 kyu: https://www.codewars.com/kata/570e8ec4127ad143660001fd

function billboard(name, price = 30){
  let result = 0
  for (let i = 0; i < name.length; i++) {
    result += price
  }
  return result
} 