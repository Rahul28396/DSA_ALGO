function TernarySearch(arr, target) {
  function search(left, right) {
    while (left <= right) {
      const mid1 = left + Math.floor((right - left) / 3);
      const mid2 = right - Math.floor((right - left) / 3);

      if (arr[mid1] === target) return mid1;
      if (arr[mid2] === target) return mid2;

      if (arr[mid1] > target) {
        right = mid1 - 1;
      } else if (arr[mid2] < target) {
        left = mid2 + 1;
      } else {
        left = mid1 + 1;
        right = mid2 - 1;
      }
    }

    return -1; // Target not found
  }

  return search(0, arr.length - 1);
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const result = TernarySearch(arr, target);
console.log("Element is present at index " + result); // Output: Element is present at index 4
