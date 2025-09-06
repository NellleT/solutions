// Codewars: No oddities here
// 7 kyu: https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce

function noOdds( values ){
    let evens = [];
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 == 0) {
        evens.push(values[i])
      }
    } return evens
  }