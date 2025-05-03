// Codewars: Complementary DNA
// 7 kyu: https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function dnaStrand(dna){
    const spl = dna.split("")
    let result = []
    for (let i = 0; i < spl.length; i++) {
      if (spl[i].toUpperCase() == "A") {
        result.push("T")
      } else if (spl[i].toUpperCase() == "T") {
        result.push("A")
      } else if (spl[i].toUpperCase() == "C") {
        result.push("G")
      } else if (spl[i].toUpperCase() == "G") {
        result.push("C")
      }
    }
    return result.join("")
  }