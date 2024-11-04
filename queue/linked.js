class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const removedValue = this.front.value;
    this.front = this.front.next;
    this.size--;

    if (this.isEmpty()) {
      this.rear = null;
    }

    return removedValue;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.isEmpty());
