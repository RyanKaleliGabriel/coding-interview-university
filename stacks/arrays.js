class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  push(value) {
    return this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return false;
    }
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }
}
// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack)
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false
