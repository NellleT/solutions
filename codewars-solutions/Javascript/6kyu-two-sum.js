// Codewars: Two Sum
// 6 kyu: https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(nums, target) {
  
  let map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
}