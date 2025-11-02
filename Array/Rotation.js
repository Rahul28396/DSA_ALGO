/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* Rotate an array of n elements to the right by k steps.
 * Example:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */

// Time Complexity: O(n)
// Space Complexity: O(1)
// LeetCode: https://leetcode.com/problems/rotate-array/

var rotate = function(nums, k) {
  const d = k%nums.length;
  const n = nums.length - 1;

  if(nums.length <= 1){
    return nums;
  }


  // Reverse the first n-d elements
  // This will put the first n-d elements at the end
  reverse(nums, 0, n-d);

  // Reverse the last d elements
  // This will put the last d elements at the front
  reverse(nums, n-d+1, n);

  // Reverse the entire array
  // This will put the entire array in the correct order
  reverse(nums, 0, n);

  return nums;

};

const reverse = function(nums, start, end){
    while(start < end){
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end]=temp;
        start++;
        end--
    }
}