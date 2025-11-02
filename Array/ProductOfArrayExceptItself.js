// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);
    
    // Calculate prefix products
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }
    
    // Calculate suffix products and multiply with prefix products
    let suffixProduct = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffixProduct *= nums[i + 1];
        answer[i] *= suffixProduct;
    }
    
    return answer;
}

// Example usage
const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result); // Output: [24, 12, 8, 6]

// Note: The function runs in O(n) time and uses O(1) additional space (excluding the output array).
// The function can be used in various applications where calculating the product of elements except for a specific index is required,
// such as in mathematical computations, data analysis, and algorithmic challenges.
// The function can be easily integrated into larger applications or used as a standalone utility.
export default productExceptSelf;