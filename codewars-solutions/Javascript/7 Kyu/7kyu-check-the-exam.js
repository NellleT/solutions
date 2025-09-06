// Codewars: Check the exam
// 6 kyu: https://www.codewars.com/kata/5a3dd29055519e23ec000074

function checkExam(array1, array2) {
    let total = 0;
    for (let i = 0; i < array2.length; i++) {
      if (array1[i] == array2[i]) {
        total += 4
      } else if (array2[i] == "") {
        continue
      } else {
        total -= 1
      }
    }
    if (total < 0) {
      return 0
    }
    else {
      return total
    }
  }function checkExam(array1, array2) {
    let total = 0;
    for (let i = 0; i < array2.length; i++) {
      if (array1[i] == array2[i]) {
        total += 4
      } else if (array2[i] == "") {
        continue
      } else {
        total -= 1
      }
    }
    if (total < 0) {
      return 0
    }
    else {
      return total
    }
  }