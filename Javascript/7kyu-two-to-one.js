// Codewars: Two to One
// 7 kyu: https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
    let unsorted_arr = []
    for (let i = 0; i < s1.length; i++) {
      if (unsorted_arr.includes(s1[i])) {
        continue
      } else {
        unsorted_arr.push(s1[i])
      }
    }
    for (let j = 0; j < s2.length; j++) {
      if (unsorted_arr.includes(s2[j])) {
        continue
      } else {
        unsorted_arr.push(s2[j])
      }
    }
    return unsorted_arr.sort().join("")
  }