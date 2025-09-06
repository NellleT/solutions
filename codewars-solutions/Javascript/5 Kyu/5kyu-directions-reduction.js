// Codewars: Directions Reduction
// 5 kyu: https://www.codewars.com/kata/550f22f4d758534c1100025a
// Solution using a stack algorithm to reduce the useless directions

function dirReduc(arr){
  
  let stack = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (stack[stack.length - 1] == "NORTH" && arr[i] == "SOUTH" || stack[stack.length - 1] == "SOUTH" && arr[i] == "NORTH") {
      stack.pop();
    } else if (stack[stack.length - 1] == "EAST" && arr[i] == "WEST" || stack[stack.length - 1] == "WEST" && arr[i] == "EAST") {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  
  return stack;
}