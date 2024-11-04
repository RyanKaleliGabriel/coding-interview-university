class Queue {
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

    return this.items[0];
  }

  enqueue(value) {
    return this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return false;
    }
    return this.items.shift();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.peek()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.isEmpty());
