// ALSO known as constant time

//An algorithm that will execute in the same amount of time regardless of the amount of data
//It doesn't matter if it is a 10000 item array or a 5 item array it will perform the exact same way

//1.Adding an item to the end of an array
const arr = [1, 2];
function addItem(item) {
  return (arr[arr.length] = item);
}
addItem(3);
console.log(arr);

//2. Getting first element of in an array (Access)
function getFirstElement(arr) {
  return arr[0];
}
console.log(getFirstElement(arr))

