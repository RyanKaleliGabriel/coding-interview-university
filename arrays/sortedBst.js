class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const sortedArraytoBST = function (nums) {
  const buildTree = function (start, end) {
    if (start > end) {
      return null;
    }

    //Calculate the middle index
    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(nums[mid]);

    //Recursively process left and right subarrays
    node.left = buildTree(start, mid - 1);
    node.right = buildTree(mid + 1, end);
    return node
  };

  return buildTree(0, nums.length - 1);
};

const nums = [-10, -3, 0, 5, 9];
const result = sortedArraytoBST(nums);
console.log(result);
