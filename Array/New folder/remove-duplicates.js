function removeDuplicates(nums) {
  let l = 1;
  let i = 0;

  while (i < nums.length - 1 && l < nums.length) {
    if (nums[i] === nums[l]) {
      l++;
    } else {
      nums[i + 1] = nums[l];
      i++;
      l++;
    }
  }

  return nums;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 1, 1, 1]));
console.log(removeDuplicates([1, 2, 3, 4, 5]));
