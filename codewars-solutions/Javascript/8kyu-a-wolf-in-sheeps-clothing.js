// Codewars: A wolf in sheep's clothing
// 8 kyu: https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

function warnTheSheep(queue) {
  let rev = queue.reverse()
  for (let i = 0; rev.length > i; i++) {
    if (rev[0] == "wolf" || rev[rev.length] == "wolf") {
      return "Pls go away and stop eating my sheep"
    } else if (rev[i] == "wolf") {
      return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
    }
  }
}