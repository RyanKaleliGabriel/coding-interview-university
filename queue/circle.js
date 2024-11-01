class MyCircularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.size = size; //Maximum capacity of the queue
    this.front = -1; //Pointer to the first element
    this.rear = -1; //Ponter to the rear element
    this.count = 0; // Current number of elements in the square
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
      return false;
    }

    if (this.isEmpty()) {
      this.front = 0; // Initialise the fron to 0 when the queue is first used
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
      // Only one element in the queue
      this.front = -1;
      this.rear = -1;
    } else {
      //Move front pointer forward in a circular manner
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
