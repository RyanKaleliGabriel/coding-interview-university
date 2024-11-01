//Node class representing each element in  the linked lists

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularQueue {
  constructor() {
    this.front = null; // Points to the front of the queue
    this.rear = null; //Points to the back of the queue
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  //Peek the front element o fthe queue
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.front.value
  }

  //Add a value to the queue

  // Add a value to the queue
  enqueue(value) {
    const newNode = new Node(value); // Create a new node

    if (this.isEmpty()) {
      // If the queue is empty, initialize front and rear to the new node
      this.front = newNode;
      this.rear = newNode;
      newNode.next = this.front; // Point it to itself to make it circular
    } else {
      // Link the new node to the end of the queue
      this.rear.next = newNode; // Point the old rear to the new node
      newNode.next = this.front; // The new node points back to the front
      this.rear = newNode; // Update rear to the new node
    }

    this.size++; // Increase the size of the queue
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const removedValue = this.front.value;

    if (this.front === this.rear) {
      //if there is only one element reset the queue
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
      this.rear.next = this.front;
    }
    this.size--;

    return removedValue;
  }
}

const myCircularQueue = new CircularQueue();
myCircularQueue.enqueue(1);
myCircularQueue.enqueue(2);
myCircularQueue.enqueue(3);
console.log(myCircularQueue)
console.log(myCircularQueue.peek());      // Output: 1
console.log(myCircularQueue.dequeue());   // Output: 1
console.log(myCircularQueue.dequeue());   // Output: 2
myCircularQueue.enqueue(4);
console.log(myCircularQueue.peek());      // Output: 3
console.log(myCircularQueue.dequeue());   // Output: 3
console.log(myCircularQueue.dequeue());   // Output: 4
console.log(myCircularQueue.isEmpty());   // Output: true