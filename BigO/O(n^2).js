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

function printElements(arr) {
  console.time("Time of O(n)");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  console.timeEnd("Time of O(n)");
}

printAllPairs(arr);
printElements(arr);
