// Explanation:
// Use XOR operation to find the single number in an array where every other number appears twice.
// XOR of a number with itself is 0, and XOR of a number with 0 is the number itself.
// Thus, all paired numbers will cancel each other out, leaving only the single number.

function singleNumber(nums) {
  let result = 0;
  for (let v of nums) result ^= v;
  return result;
}

// Let x be the single (unpaired) number.
// Let a1..ak be the distinct numbers that each appear exactly twice.
// Then
// sum(nums) = x + 2*(a1 + a2 + ... + ak)
// sum(set(nums)) = x + (a1 + a2 + ... + ak)
// Compute 2 * sum(set(nums)) - sum(nums): 2*(x + Σ ai) - (x + 2Σ ai) = 2x + 2Σ ai - x - 2Σ ai = x
// So 2 * sum(set(nums)) - sum(nums) equals the single number x.

function singleNumberSet(nums) {
  const s = new Set();
  let total = 0;
  for (const v of nums) {
    total += v;
    s.add(v);
  }
  let sumSet = 0;
  for (const v of s) sumSet += v;
  return 2 * sumSet - total;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([1]));
console.log(singleNumberSet([7, 3, 5, 4, 5, 3, 4]));
