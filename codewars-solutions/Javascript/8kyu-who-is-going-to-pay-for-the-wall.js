// Codewars: Who is going to pay for the wall?
// 8 kyu: https://www.codewars.com/kata/58bf9bd943fadb2a980000a7

function whoIsPaying(name) {
  return name.length <= 2 ? [name] : [name, name.slice(0, 2)];
}