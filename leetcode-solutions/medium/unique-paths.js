// Leetcode: Unique Paths
// Medium: https://leetcode.com/problems/unique-paths/?envType=problem-list-v2&envId=math

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
return Math.round(factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1)));
};