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

  // Exmple traversal (in-order)
  inOrderTraverse(node = this.root) {
    if (node) {
      this.inOrderTraverse(node.left);
      console.log(node.value);
      this.inOrderTraverse(node.right);
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
}

//Usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(8);
tree.insert(13);
tree.inOrderTraverse();
tree.preOrderTraverse();
tree.postOrderTraverse();
tree.levelOrderTraverse();
