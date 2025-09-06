// Codewars: Data Reverse
// 6 kyu: https://www.codewars.com/kata/569d488d61b812a0f7000015

function dataReverse(data) {
    let temp_bits = [];
    let bits = [];

    for (let i = 0; i < data.length; i++) {
      temp_bits.push(data[i]);
  
      if (temp_bits.length === 8) {
        bits.push(temp_bits);
        temp_bits = [];
      }
    }

    return bits.reverse().flat();
  }