class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.value;
  }

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

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedValue;
  }
}

//Usage
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());
