// Is the complexity for efficient sorting algorithms
// An example is the quicksort -> Comparing and moving values very efficiently without shiffting
// unlike some of the sorting alogrithms we have used in the past

function quickSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1]; //Choose the last element as the pivot
  const left = []; //Elements less than the pivot
  const right = []; //Elements greater than the pivot

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Push to ther left if less than pivot
    } else {
      right.push(arr[i]); // Push to the right if greater than or equal to pivot
    }
  }

  //Recursively sort the left and right subarrays and combine
  return [...quickSort(left), pivot, ...quickSort(right)];
}

//Example usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(unsortedArray)
console.log(sortedArray)
