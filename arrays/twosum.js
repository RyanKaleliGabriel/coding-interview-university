// This approach has a time complexity of 𝑂(𝑛) O(n) and a space complexity of 𝑂(𝑛) .
//  Maps allow for fast lookups (average 𝑂(1) O(1) time complexity), which makes it
// efficient to check if the complement of the current number exists as we iterate through the array.
// This enables us to find pairs that sum to the target in a single pass through the array.

const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // For each number, calculate the complement (the number needed to reach the target).
    const complement = target - nums[i];

    if (map.has(complement)) {
      // If the complement is in the map, return the indices of the complement and the current number.
      return [map.get(complement), i];
    }

    // This will store each number and its index as we iterate through the array.
    // If the complement isn't in the map, add the current number and its index to the map.
    console.log(map)
    map.set(nums[i], i);
  }
  return null;
};

const arr = [3, 2, 6, 7, 8, 4];
const target = 6;
const result = twoSum(arr, target);
console.log(result);
