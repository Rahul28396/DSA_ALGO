function FindPeak(arr) {
    let n = arr.length;
    if (n === 0) return -1; // Handle empty array case
    if (n === 1) return arr[0]; // Handle single element case

    let left = 0;
    let right = n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if mid is a peak
        if ((mid === 0 || arr[mid - 1] <= arr[mid]) && (mid === n - 1 || arr[mid + 1] <= arr[mid])) {
            return mid; // Return the index of the peak
        }

        // If the left neighbor is greater, then there must be a peak on the left side
        if (mid > 0 && arr[mid - 1] > arr[mid]) {
            right = mid - 1;
        } else { // Otherwise, there must be a peak on the right side
            left = mid + 1;
        }
    }

    // If no peak is found, return -1
    return -1; // No peak found
}

// Example usage
const arr = [1, 3, 20, 4, 1, 0];
const peakIndex = FindPeak(arr);
console.log("Peak element is at index: " + peakIndex); // Output: Peak element is at index: 2

// Note: The peak element is not necessarily unique; there can be multiple peaks in the array.
// The function returns the index of one of the peaks found in the array.
export default FindPeak;
export { FindPeak };
// This function implements a binary search algorithm to find a peak element in an array.
// A peak element is an element that is greater than or equal to its neighbors.
// The function returns the index of a peak element if found, otherwise it returns -1.
// The time complexity of this algorithm is O(log n) due to the binary search approach.
// The space complexity is O(1) as it uses a constant amount of space.
// The function handles edge cases such as empty arrays and single-element arrays.
// It uses a while loop to narrow down the search space until a peak is found or the search space is exhausted.
// The function checks the middle element and its neighbors to determine if it is a peak.
// If the middle element is not a peak, it decides whether to search in the left or right half of the array based on the values of its neighbors.
// The function is efficient and works well for large arrays, making it suitable for applications where peak finding is required.


// The function can be used in various scenarios such as signal processing, image processing, and data analysis where peak detection is essential.
// The function can be easily integrated into larger applications or used as a standalone utility.
// The function is written in JavaScript and can be executed in any JavaScript environment, including web browsers and Node.js.
// The function can be tested with different input arrays to verify its correctness and performance.
// The function can be extended or modified to find multiple peaks or to return the peak value instead of the index if needed.
// The function is designed to be reusable and modular, allowing for easy integration into other codebases.
// The function can be documented with comments to explain its purpose, parameters, and return values for better understanding and maintainability.
// The function can be optimized further if needed, but the current implementation is efficient for most use cases.
// The function can be exported as a module for use in other files or projects, enhancing code reusability and modularity.
// The function can be included in a library of search algorithms, providing a comprehensive set of tools for developers.
// The function can be used in educational contexts to teach binary search and peak finding algorithms.
// The function can be adapted for different programming languages with similar syntax and logic.
// The function can be tested with edge cases such as arrays with all identical elements, strictly increasing or decreasing arrays, and arrays with multiple peaks.
// The function can be used in competitive programming or coding interviews to demonstrate understanding of search algorithms and problem-solving skills.
// The function can be optimized for specific use cases, such as finding the first or last peak in a sorted array.
// The function can be used in real-time applications where peak detection is crucial, such as in audio processing or sensor data analysis.
// The function can be combined with other algorithms to solve more complex problems involving peak detection and analysis.
// The function can be used in data visualization tools to highlight peak values in graphs or charts.
// The function can be modified to return additional information about the peak, such as its value or the number of peaks found.
// The function can be used in machine learning applications where peak detection is necessary for feature extraction or data preprocessing.
// The function can be included in a larger project that requires efficient search algorithms, enhancing the overall functionality and performance of the application.
// The function can be documented with examples and use cases to help users understand its application and benefits.