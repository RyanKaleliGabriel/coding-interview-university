const merge = function (nums1, m, nums2, n) {
  // update lement of n from num1
  nums1.splice(m);
  for (let i = 0; i < nums2.length; i++) {
    nums1[m + i] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};

// An optimized approach
// This approach iterates only once over each element in nums1 and nums2, 
// making it efficient with a time complexity of 𝑂(𝑚+𝑛)

const merge2 = function (nums2, m, nums1, n) {
  let i = m - 1; //last element of nums1
  let j = n - 1; //last element of nums2
  let k = m + n - 1; // last element of the merged array

  // Reverse merge
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] - nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  return nums1;
};

let nums1 = [0];
let nums2 = [1];
let m = 0;
let n = 1;

console.log(merge(nums1, m, nums2, n));

console.log(merge2(nums1, m, nums2, n));
