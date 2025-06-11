function SquareRoot(n){
    if (n < 0) return -1; // Handle negative input case
    if (n === 0 || n === 1) return n; // Handle base cases

    let left = 0;
    let right = n;
    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === n) {
            return mid; // Perfect square found
        } else if (square < n) {
            result = mid; // Update result for the largest integer less than or equal to sqrt(n)
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result; // Return the largest integer less than or equal to sqrt(n)
}

// Example usage
const n = 16;
const sqrt = SquareRoot(n);
console.log(`Square root of ${n} is: ${sqrt}`); // Output: Square root of 16 is: 4

// Note: The function returns the largest integer less than or equal to the square root of n.
// The time complexity of this algorithm is O(log n) and the space complexity is O(1).
// The function can be used in various applications where calculating the square root is required,
// such as in mathematical computations, physics simulations, and financial calculations.
// The function can be easily integrated into larger applications or used as a standalone utility.
export default SquareRoot;