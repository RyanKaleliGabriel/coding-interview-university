class MyCircularQueue {
  constructor(k) {
    this.items = new Array(k);
    this.size = k;
    this.front = -1;
    this.rear = -1;
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
    return this.items[this.front];
  }

  Rear() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.rear];
  }

  enQueue(value) {
    if (this.isFull()) {
      return -1;
    }

    if (this.isEmpty()) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.size;
    this.items[this.rear] = value;
    this.count++;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    }

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    this.count--;
    return true;
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
