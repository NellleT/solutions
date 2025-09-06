// Codewars: Exes and Ohs
// 7 kyu: https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    let lower = str.toLowerCase()
    let x = 0;
    let o = 0;
    for (let i = 0; lower.length > i; i++) {
      if (lower[i] === "x") {
        x++;
      } else if (lower[i] === "o") {
        o++;
      } else {
        continue
      }
    }
    return x == o ? true : false
}