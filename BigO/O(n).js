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
    console.timeEnd("Linear search time")
    return -1;
  }
}

//Example usage
// Creates an array of the length specified in the first parameter, each element is its own index
const largeArray = Array.from({ length: 1000000 }, (_, i) => i);
const smallArray = Array.from({ length: 5 }, (_, i) => i);

LinearSearch(largeArray, 999999);
LinearSearch(smallArray, 4);
