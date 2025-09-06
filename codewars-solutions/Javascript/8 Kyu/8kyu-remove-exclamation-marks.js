// Codewars: Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
// 8 kyu: https://www.codewars.com/kata/57faf12b21c84b5ba30001b0

function remove (string) {
  return string.replace(/!/g, "") + "!"
}