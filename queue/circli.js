class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyCircularQueue {
  constructor(k) {
    this.front = null;
    this.rear = null;
    this.size = k;
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.size;
  }

  Front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }

  Rear() {
    if (this.isEmpty()) {
      return null;
    }
    return this.rear.value;
  }

  enQueue(value) {
    const newNode = new Node(value);
    if (this.isFull()) {
      return false;
    }

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      newNode.next = this.front;
    }

    this.count++;
    return true
  }

  deQueue() {
    if (this.isEmpty()) {
      return -1;
    }

    const removedValue = this.front.value;
    if (this.front === this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
      this.rear.next = this.front;
    }
    this.count--;
    return removedValue;
  }
}


const myCircularQueue = new MyCircularQueue(3);
console.log(myCircularQueue.enQueue(1));
console.log(myCircularQueue.enQueue(2));
console.log(myCircularQueue.enQueue(3));
console.log(myCircularQueue.enQueue(4));
console.log(myCircularQueue.Rear());
console.log(myCircularQueue.isFull());
console.log(myCircularQueue.deQueue());
console.log(myCircularQueue.enQueue(4));
console.log(myCircularQueue.Rear());
