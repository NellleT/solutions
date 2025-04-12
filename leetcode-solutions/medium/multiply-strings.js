// Leetcode: Multiply Strings
// Medium: https://leetcode.com/problems/multiply-strings/description/?envType=problem-list-v2&envId=math

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function(num1, num2) {
    let num3 = BigInt(num1) * BigInt(num2)
    return num3.toString()
};