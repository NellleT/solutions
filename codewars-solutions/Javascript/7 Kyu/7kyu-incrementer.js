// Codewars: Incrementer
// 7 kyu: https://www.codewars.com/kata/590e03aef55cab099a0002e8

function incrementer(nums) {
  
  if (nums.length === 0) {
    return [];
  }
  
  let incrementer = 1;
  
  for (let i = 0; nums.length > i; i++) {
    nums[i] = nums[i] + incrementer;
    if (nums[i] + incrementer >= 10) {
      nums[i] = nums[i] % 10;
    }
    incrementer++;
  }
  
  return nums;
}