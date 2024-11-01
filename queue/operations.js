// A node in this context is an object that represents an element in a linked list.
// Each node has two parts: the data(the value we want to store) and a reference(or pointer) to the next
// node in the list. This helps us build data structires like queues or stacks, where each element can "point"
// to the next, allowing for efficient insertion and removal operations.

// Represents a single element (or "node") in the queue
class Node {
  constructor(value) {
    this.value = value; //The data in this node
    this.next = null; // The pointer to the next node in the queue,initially null
  }
}

class Queue {
  constructor() {
    this.front = null; //Points to the front node
    this.rear = null; // Points to the rear node
    this.size = 0;
  }

  //Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the item at the front of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }

  // Add an item at the end of the queue
  add(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode; //The original node with value now points to the new node with value 
      this.rear = newNode; //Update the rear pointer
    }

    this.size++;
  }

  //Remove an item from the front of the queue
  remove() {
    if (this.isEmpty()) {
      return null;
    }

    const removedValue = this.front.value;
    this.front = this.front.next; //Move the pointer to the next node
    this.size--;

    if (this.isEmpty()) {
      this.rear = null; //If the queue is now empty, reset the rear pointer
    }

    return removedValue;
  }
}

const queue = new Queue();
queue.add(1);
queue.add(2);
console.log(queue);
console.log(queue.peek());
console.log(queue.remove());
console.log(queue.isEmpty());
console.log(queue.remove());
console.log(queue.isEmpty());
