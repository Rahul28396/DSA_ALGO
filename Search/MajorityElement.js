function MajorityElement(nums) {
    let count = 0;
    let candidate = -1;

    // Finding the candidate for majority element
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Verifying if the candidate is indeed the majority element
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2 ? candidate : -1;
}

// Example usage
const nums = [3, 2, 3];
const majorityElement = MajorityElement(nums);

console.log("Majority Element is: " + majorityElement); // Output: Majority Element is: 3

// Note: The majority element is the element that appears more than n/2 times in the array.
// The function returns the majority element if it exists, otherwise it returns -1.
// The time complexity of this algorithm is O(n) and the space complexity is O(1).

// The function can be used in various applications where finding the majority element is required,
// such as in voting systems, data analysis, and decision-making processes.
// The function can be easily integrated into larger applications or used as a standalone utility.

export default MajorityElement;