const searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i; //Target found return index
    } else if (nums[i] > target) {
      return i; // Target should be inserted at this index
    }
  }
  return nums.length; //Target is greater than all elements, insert at the end
};

const nums = [1, 3, 5, 6];
const target = 4;
const result = searchInsert(nums, target);
console.log(result);
