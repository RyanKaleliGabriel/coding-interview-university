// Define the structure of a tree node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary trees with insertion and traversal
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the tree
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  // Helper function to insert a node in the correct position.
  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  // Example traversal (in-order) prints from the minimum value to maximum
  inOrderTraverse(node = this.root) {
    if (node) {
      this.inOrderTraverse(node.left);
      console.log(node.value);
      this.inOrderTraverse(node.right);
    }
  }

  //Print from maximum to minimum
  reverseInOrderTraverse(node = this.root) {
    if (node) {
      this.reverseInOrderTraverse(node.right);
      console.log(node.value);
      this.reverseInOrderTraverse(node.left);
    }
  }

  // Example Traversal (post-order)
  postOrderTraverse(node = this.root) {
    if (node) {
      this.postOrderTraverse(node.left);
      this.postOrderTraverse(node.right);
      console.log(node.value);
    }
  }

  //Example Traversal (pre-order)
  preOrderTraverse(node = this.root) {
    if (node) {
      console.log(node.value);
      this.preOrderTraverse(node.left);
      this.preOrderTraverse(node.right);
    }
  }

  // Example level Order Traversal
  levelOrderTraverse() {
    if (!this.root) return;
    const queue = [this.root]; //Start with the root node in the queue

    while (queue.length > 0) {
      const currentNode = queue.shift();
      console.log(currentNode.value);

      // Enqueue left and right children of the current node
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  // get the count of nodes in the tree
  getNodeCount(node = this.root) {
    if (!node) return 0;
    return 1 + this.getNodeCount(node.left) + this.getNodeCount(node.right);
  }

  // delete_tree
  deleteTree(node = this.root) {
    if (!node) {
      return;
    }

    // REcursively delete the left and right subtrees
    this.deleteTree(node.left);
    this.deleteTree(node.right);

    //Remove references for garbage collection
    node.left = null;
    node.right = null;
    node.value = null;

    // If this is the root node, set the root of the tree to null
    if (node === this.root) {
      this.root = null;
    }
  }

  isInTree(value, node = this.root) {
    if (!node) {
      return false;
    }
    if (node.value === value) {
      return true;
    }

    if (value < node.value) {
      return this.isInTree(value, node.left);
    } else {
      return this.isInTree(value, node.right);
    }
  }

  getHeight(node = this.root) {
    if (!node) {
      return 0;
    }

    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);

    return 1 + Math.max(leftHeight, rightHeight);
  }

  getMin(node = this.root) {
    if (!node) {
      return null;
    }

    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  getMax(node = this.root) {
    if (!node) {
      return null;
    }

    while (node.right) {
      node = node.right;
    }

    return node.value;
  }

  isBinarySearchTree(node = this.root) {
    // Helper function to validate the BST properties
    function validate(node, min, max) {
      if (node) {
        return true;
      }

      // Check the current node value against the allowed range
      if (node.value <= min || node.value >= max) {
        return false;
      }

      return (
        validate(node.left, min, node.value) &&
        validate(node.right, node.value, max)
      );
    }

    return validate(node, -Infinity, Infinity);
  }
}

//Usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(8);
tree.insert(13);
console.log(tree);
// tree.inOrderTraverse();
// tree.preOrderTraverse();
// tree.postOrderTraverse();
// tree.levelOrderTraverse();
// console.log(tree.getNodeCount());
// tree.reverseInOrderTraverse();
// tree.deleteTree();
// console.log(tree);

console.log(tree.isInTree(5));
console.log(tree.isInTree(119));
console.log(tree.getHeight());
console.log(tree.getMin());
console.log(tree.getMax());
console.log(tree.isBinarySearchTree())