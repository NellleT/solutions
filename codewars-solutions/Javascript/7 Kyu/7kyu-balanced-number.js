// Codewars: Balanced Number (Special Numbers Series #1 )
// 7 kyu: https://www.codewars.com/kata/5a4e3782880385ba68000018

function balancedNum(number) {
  
  let arr = number.toString().split("");
  let leftsum = 0;
  let rightsum = 0;

  if (arr.length <= 1) {
    return 'Balanced'
  }

  if (arr.length % 2 === 1) {
    arr.splice(Math.floor(arr.length / 2), 1);
  } else {
    arr.splice(Math.floor(arr.length / 2) - 1, 2);
  }

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length / 2) {
      leftsum += parseInt(arr[i]);
    } else {
      rightsum += parseInt(arr[i]);
    }
  }

  return leftsum === rightsum ? 'Balanced' : 'Not Balanced';
}