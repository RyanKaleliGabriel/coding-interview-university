// Quadratic time.
// Time to complete will be proportional to the square of the amount of data
// This happens when you have nested loops
// For every iteration in the outer loop (O(N))
// The inner loop runs through all elements (O(N))
// So, for every element in the outer loop,
// the inner loop runs N times, resulting in (O(N * N))

const arr = Array.from({ length: 3 }, (_, i) => i);

function printAllPairs(arr) {
  console.time("Time of O(n^2)");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
  console.timeEnd("Time of O(n^2)");
}

printAllPairs(arr);

//Bubble sort is another example
//It repeateadly compares adjacent elements in an array and swaps them if they are in the wrong,
//order
//Gradually bubbleing the largest elements to the end of the array until the whole list is sorted

function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(unsortedArray));
