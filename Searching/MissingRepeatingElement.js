/*
    * Find the missing and repeating elements in an array of integers.
    * The array contains integers from 1 to n, where one integer is missing and one integer is repeating.
    * The function returns an object with the missing and repeating elements.
    * @description
    * This function uses a counting array to track the occurrences of each integer in the input array.
    * It iterates through the input array to populate the counting array,
    * then iterates through the counting array to find the missing and repeating integers.
    * The time complexity - O(n)
    * The space complexity - O(n)
    * @function MissingRepeatingElement
    * @param {number[]} arr - The input array containing integers from 1 to n.
    * @returns {Object} - An object containing the missing and repeating elements.
*/
function MissingRepeatingElement(arr = []) {
    const count = new Array(arr.length + 1).fill(0);
    
    let missing = -1;
    let repeating = -1;

    for(let i=0; i<arr.length; i++){
        count[arr[i]] = (count[arr[i]] || 0) + 1;
    }

    for(let i=0; i<=arr.length; i++){
        if(count[i] === 0){
            missing = i;
        }else if(count[i] === 2){
            repeating = i;
        }
    }

    return { missing, repeating };
}

const arr = [1, 2, 4, 4];
const result = MissingRepeatingElement(arr);
console.log("Missing Element:", result.missing);
console.log("Repeating Element:", result.repeating);