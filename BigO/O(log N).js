// Efficient for divide and conquer algorithms such as the binary search tree
// Data being used is decreased by 50% each time through the algorithm

// Example the binary search tree

function binarySearch(arr, target) {
  let left = 0; // Initialise the left pointer
  let right = arr.length - 1; //Initialise the right pointer
  let iterations = 0; // Initialize a counter for iterations

  while (left <= right) {
    iterations++; // Increment the iteration count
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      console.log(`Iterations: ${iterations}`); // Log the number of iterations
      // check if the middle element is the target
      return mid; // target found return the index
    } else if (arr[mid] < target) {
      // Check if the target is greater, ignore the left half
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(`Iterations: ${iterations}`);
  return -1;
}

//Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const largeArray = Array.from({ length: 999999 }, (_, i) => i);
const target = 7;
const result = binarySearch(sortedArray, target);
const result2 = binarySearch(largeArray, 548325)

console.log(result); // Output: 6(index of the target)
console.log(result2)

