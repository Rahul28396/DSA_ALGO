function indexOfFirstOne(arr, low, high){
    if (low > high) {
        return -1; // Base case: no 1 found
    }
    
    const mid = Math.floor((low + high) / 2);
    
    // If mid is the first index and it is 1, return mid
    if ((mid === 0 || arr[mid - 1] === 0) && arr[mid] === 1) {
        return mid;
    }
    
    // If mid is 0, search in the right half
    if (arr[mid] === 0) {
        return indexOfFirstOne(arr, mid + 1, high);
    } else {
        // Search in the left half
        return indexOfFirstOne(arr, low, mid - 1);
    }
}

// Example usage
const arr = [0, 0, 0, 1, 1, 1]; 
const low = 0;
const high = arr.length - 1;
const firstIndex = indexOfFirstOne(arr, low, high);
console.log(`First index of 1 in the array: ${firstIndex}`); // Output: 3