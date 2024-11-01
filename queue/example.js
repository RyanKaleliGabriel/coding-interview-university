//  Represents a single element or node in the queue
class Node {
  constructor(value) {
    this.value = value; //The value of the element
    this.next = null; // The pointer to the next element, intially its null
  }
}

//Queue implementation with is abstract behaviour
class Queue {
  constructor() {
    this.front = null; // Pointer to the first element of the queue
    this.rear = null; // Pointer to the last element of the queue
    this.size = 0; // The current size of the queue
  }

  //isEmpty, Abstract behaviour of the queue that checks if the queue has no values
  isEmpty() {
    return this.size === 0;
  }

  //Peek, abstract behaviour that returns the first node/element of the queue that rwithout alterign the queue
  peek() {
    //Checking for nullables
    if (this.isEmpty()) {
      return null;
    }

    return this.front.value;
  }

  //Enqueue, Abstract behaviour of the queue that inserts a node in the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      //Checks if the queue is empty at first
      // the front and rear pointer of the queue becomes the newNode
      this.front = this.rear = newNode;
    } else {
      // What if our queue already has some values, focus on adding the node at the end of the queue
      this.rear.next = newNode;
      this.rear = newNode;
    }

    // Our queue size increaments in size
    this.size++;
  }

  // Dequeue, Abstract behaviour of the queue that deletes a node in the queue and returns the deleted value

  dequeue() {
    //If the queue is empty, there is no need to return any value
    if (this.isEmpty()) {
      return null;
    }

    //If not we remove the value, decrement the size and return the removed value, focus of the front of the queue
    const removedValue = this.front.value;
    this.front = this.front.next;
    this.size--;

    //After removing, we check if the queue is empty to adjust the rear.
    if (this.isEmpty()) {
      this.rear = null;
    }
    return removedValue;
  }
}

// Example usage
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
