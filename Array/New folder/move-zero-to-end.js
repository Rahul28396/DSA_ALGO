function moveZeroes(nums) {
  let arr = new Array(nums.length).fill(0);
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      arr[index] = nums[i];
      index = index + 1;
    }
  }

  return arr;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]));
console.log(moveZeroes([0, 0, 0, 0, 0]));