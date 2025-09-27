// Codewars: Evil or Odious
// 8 kyu: https://www.codewars.com/kata/56fcfad9c7e1fa2472000034

function evil(n) {
  const spl = (n >>> 0).toString(2).split("");
  let counter = 0;
  
  for (let i = 0; i <= spl.length; i++) {
    if (spl[i] == "1") {
      counter++;
    }
  }
  
  return counter % 2 === 0 ? "It's Evil!" : "It's Odious!";
}