// Codewars: What's the real floor?
// 8 kyu: https://www.codewars.com/kata/574b3b1599d8f897470018f6

function getRealFloor(n) {
    if (n >= 13){
       return n -= 2
    }
    else if (n < 13 && n > 0){
       return n -= 1
    }
    else if (n < 0) {
      return n
    }
    else {
      return 0
    }
  }