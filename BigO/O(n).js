//An algorithim where the time to complete will grow with respect to the amount of data
const arr = [10, 15, 12, 45, 567, 24, 254];

function printAllElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

printAllElements(arr);

//Linear Search
function LinearSearch(arr, target) {
  console.time("Linear search time");
  for (i = 0; i < arr.length; i++) {
    if (arr[1] === target) {
      console.timeEnd("Linear search time");
      return 1;
    }
    console.timeEnd("Linear search time");
    return -1;
  }
}

//Example usage
// Creates an array of the length specified in the first parameter, each element is its own index
const largeArray = Array.from({ length: 1000000 }, (_, i) => i);
const smallArray = Array.from({ length: 5 }, (_, i) => i);

LinearSearch(largeArray, 999999);
LinearSearch(smallArray, 4);

// MERGE SORT

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; //Base Case; an array of one element is already sorted.
  }

  //Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both halves and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}



const unsortedArray = [64, 25, 12, 22, 11];
const sortedMergeSortArray = mergeSort(unsortedArray)
console.log(sortedMergeSortArray)
