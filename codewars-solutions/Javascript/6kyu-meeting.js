// Codewars: Meeting
// 6 kyu: https://www.codewars.com/kata/59df2f8f08c6cec835000012

function meeting(s) {
  
  let upper = s.toUpperCase().split(";");
  let swappedPairs = [];
  
  for (let guests of upper) {
    let parts = guests.split(":");
    swappedPairs.push([parts[1], parts[0]]);
  }
  
  let formatted = swappedPairs.map(pair => `(${pair[0]}, ${pair[1]})`).sort();
  
  return formatted.join("");
}