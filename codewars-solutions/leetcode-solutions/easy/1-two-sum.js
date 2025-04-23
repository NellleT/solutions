// Leetcode: Two Sum
// Easy: https://leetcode.com/problems/two-sum/description/
// The solution with hash table (O(n))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let map = new Map();
    let diff = 0

    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
};