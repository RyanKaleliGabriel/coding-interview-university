// It uses two pointers to maintain the array without creating an additional array, thus saving memory.
const removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k] = nums[i];
      k++;
    }
  }
  nums.slice(0,k)
  return k;
};

const nums = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(nums, val));
