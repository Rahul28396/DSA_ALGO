function firstIndexOf(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let firstIndex = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if ((mid === 0 || arr[mid - 1] < target) && arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return firstIndex;
}

function lastIndexOf(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let lastIndex = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if ((mid === arr.length - 1 || arr[mid + 1] > target) && arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return lastIndex;
}

// Function to count the number of occurrences of a target element in a sorted array
function CountNumberOfOccurences(arr, target) {
    const firstIndex = firstIndexOf(arr, target);
    const lastIndex = lastIndexOf(arr, target);
    return lastIndex - firstIndex + 1;
}

// Example usage
const arr = [1, 2, 2, 2, 3, 4, 5];
const target = 2;
const count = CountNumberOfOccurences(arr, target);
console.log(`Number of occurrences of ${target} in the array: ${count}`); // Output: 3