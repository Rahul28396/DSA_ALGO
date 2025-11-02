// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.
// Time complexity : O(n^2)

function missingNumber1(nums) {
  const n = nums.length;
  let missingElement = 0;

  for (let i = 0; i <= n; i++) {
    let isFound = false;

    for (let j = 0; j < n; j++) {
      if (nums[j] === i) {
        isFound = true;
      }
    }

    if (!isFound) missingElement = i;
  }

  return missingElement;
}

// Alternative solution: Sum formula(arithemetic series) O(n) time complexity
function missingNumber2(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < n; i++) {
    actualSum += nums[i];
  }

  return expectedSum - actualSum;
}

// XOR method O(n) time complexity
function missingNumber3(nums) {
  const n = nums.length;
  let xorAll = 0;
  let xorArray = 0;
  
  for (let i = 0; i <= n; i++) {
    xorAll ^= i;
  }

  for (let i = 0; i < n; i++) {
    xorArray ^= nums[i];
  }

  return xorAll ^ xorArray;
}

console.log(missingNumber1([3, 0, 1]));
console.log(missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber3([0, 1, 2]));
