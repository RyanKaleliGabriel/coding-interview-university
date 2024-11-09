// Array 101:
// An array is a contiguous area of memory consisting of equal size elements indexed by contiguous intergers.

let arr = [1, 2, 3, 4, 5];

// Reading: Accessing an element by it index
// O(1) is the runtime when reading from an array, at any postion
console.log("Element at index 2:", arr[2]);
function read(arr) {
  return arr[2];
}
console.log("Element at index 2:", read(arr));

// Adding: Insert at a specific position
// First arguement is the postion we want to insert the new element
// Second parameter is the count. Represents the number of elements to be removed.
// The rest of the aruegments can be the elements we want to be insert
// O(n) is the runtime when adding an element at a specific position of an array. O(1) at the end
arr.splice(2, 0, 10);
console.log("After Adding element 10", arr);
function add(arr, index, element) {
  let new_arr = [];
  for (let i = 0; i < index; i++) {
    new_arr[i] = arr[i];
  }

  new_arr[index] = element;

  for (let i = index; i < arr.length; i++) {
    new_arr[i + 1] = arr[i];
  }

  return new_arr;
}

console.log("After adding element 10", add(arr, 2, 10));

// Removing from a specific position
// O(n) is the runtime when removing an element at a specific position of an array. O(1) at the end
arr.splice(2, 1);
console.log("After removing element 10", arr);

function remove(arr, index) {
  let newArr = [];
  for (let i = 0; i < index; i++) {
    newArr[i] = arr[i];
  }
  for (let i = index + 1; i < arr.length; i++) {
    newArr[i - 1] = arr[i];
  }
  return newArr;
}
console.log("After removing element 10", remove(arr, 2));

// Updating an element at a specific position. This removes the initial element.
arr[2] = 15;
console.log("After updating", arr);
function update(arr, index, element) {
  arr[index] = element;
  return arr;
}
console.log("After updating", update(arr, 2, 15));

// Searching. Finding index of an element
let index = arr.indexOf(4);
console.log("Index of 4:", index);

function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log("Index of 4:", search(arr, 4));

// Sorting (Order elements)
// Ascending order
arr.sort((a, b) => a - b);
console.log("After sorting in ascending order", arr);

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

arr = sort(arr);
console.log("After sorting in ascending order", arr);

// Descending order
arr.sort((a, b) => b - a);
console.log("After sorting in descending order", arr);

function sortD(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
arr = sortD(arr);
console.log("After sorting in descending order", arr);

// Reversing (Reverse order of elements)
arr.reverse();
console.log("After reversing:", arr);

function reverse(arr) {
  const newArr = [];
  for (i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
arr = reverse(arr);
console.log("After reversing:", arr);

arr.splice(2, 0, 20);
console.log("After adding 20:", arr);

function addTen(arr, index, element) {
  let newArr = [];
  for (let i = 0; i < index; i++) {
    newArr[i] = arr[i];
  }

  newArr[index] = element;

  for (let i = index; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
  }
  return newArr;
}
arr = addTen(arr, 2, 10)
console.log("After adding 10:", arr);

arr.splice(3,1);
console.log("After removing 20:", arr);

function removeTen(arr, index) {
  const newArr = [];
  for (let i = 0; i < index; i++) {
    newArr[i] = arr[i];
  }

  for (let i = index + 1; i < arr.length; i++) {
    newArr[i-1] = arr[i];
  }
  return newArr
} 
arr = removeTen(arr, 2)
console.log("After removing 10:", arr);
