function BinarySearchRecursive(arr, l, r, x) {
  let mid = l + (r - l) / 2;

  if (r >= l) {
    if (x === arr[mid]) {
      return mid;
    } else if (x > arr[mid]) {
      return BinarySearchRecursive(arr, mid + 1, r, x);
    } else {
      return BinarySearchRecursive(arr, l, mid - 1, x);
    }
  }

  return -1;
}

const arr = [1,2,3,4,5,6,7,8,9,10];
const x = 5;

console.log("Element is present at index " + BinarySearchRecursive(arr, 0, arr.length - 1, x));