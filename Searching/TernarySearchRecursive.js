function TernarySearch(arr, target) {
    const search = (low, high) => {
        if (high < low) {
            return -1; // Target not found
        }

        const third = Math.floor((high - low) / 3);
        const mid1 = low + third;
        const mid2 = high - third;

        if (arr[mid1] === target) {
            return mid1; // Target found at mid1
        }

        if (arr[mid2] === target) {
            return mid2; // Target found at mid2
        }

        if (arr[mid1] > target) {
            return search(low, mid1 - 1); // Search in the left segment
        } else if (arr[mid2] < target) {
            return search(mid2 + 1, high); // Search in the right segment
        } else {
            return search(mid1 + 1, mid2 - 1); // Search in the middle segment
        }
    };

    // Ensure the array is sorted before performing ternary search
    if (!Array.isArray(arr) || arr.length === 0) {
        return -1; // Invalid input
    }

    // Check if the array is sorted
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return -1; // Array is not sorted
        }
    }

    return search(0, arr.length - 1);
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const result = TernarySearch(arr, target);
console.log("Element is present at index " + result); // Output: Element is present at index 4

// Example usage with an unsorted array
const unsortedArr = [10, 1, 3, 2, 5];
const unsortedResult = TernarySearch(unsortedArr, target);
console.log("Element is present at index " + unsortedResult); // Output: -1 (since the array is not sorted)

// Example usage with an empty array
const emptyArr = [];
const emptyResult = TernarySearch(emptyArr, target);
console.log("Element is present at index " + emptyResult); // Output: -1 (since the array is empty)

// Example usage with a single element array
const singleElementArr = [5];
const singleElementResult = TernarySearch(singleElementArr, 5);
console.log("Element is present at index " + singleElementResult); // Output: Element is present at index 0

// Example usage with a two-element sorted array
const twoElementArr = [3, 5];
const twoElementResult = TernarySearch(twoElementArr, 5);
console.log("Element is present at index " + twoElementResult); // Output: Element is present at index 1

// Example usage with a two-element unsorted array
const twoElementUnsortedArr = [5, 3];
const twoElementUnsortedResult = TernarySearch(twoElementUnsortedArr, 5);
console.log("Element is present at index " + twoElementUnsortedResult); // Output: -1 (since the array is not sorted)