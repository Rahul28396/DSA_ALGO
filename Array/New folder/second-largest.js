function secondLargestElement(nums) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (largest < nums[i]) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] > secondLargest && nums[i] < largest) {
      secondLargest = nums[i];
    }
  }

  return secondLargest !== -Infinity ? secondLargest : -1;
}

console.log(secondLargestElement([7, 7, 2, 2, 10, 10]));
console.log(secondLargestElement([1, 2, 3, 4]));
console.log(secondLargestElement([10, 10, 10]));
console.log(secondLargestElement([8, 8, 7, 6, 5]));
