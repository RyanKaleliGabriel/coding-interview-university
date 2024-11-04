// Node class: Represents a single element in the stack
class Node {
  constructor(value) {
    this.value = value; //Data the node holds
    this.next = null; // Pointer to the next node in the stack
  }
}

//Stack class: Manages nodes with stack operations
class Stack {
  constructor() {
    this.top = null; // Points tot the top node of the stack
    this.size = 0; //Tracks the number of elements in the stack
  }

  //Check if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the top item without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.value;
  }

  //Add an item to the top of the stack
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }

  // Remove and return the top item of the stack
  pop() {
    if (this.isEmpty()) {
      return null; // If stack is empty, there is nothing to pop
    }

    const poppedValue = this.top.value; //Get the value from the top node
    this.top = this.top.next; //Move the top pointer to the next node
    this.size--;
    return poppedValue;
  }
}

//Usage
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());
