var MyQueue = function () {
  this.stackIn = []; // Stack to handle incoming elements
  this.stackOut = []; // Stack to handle outgoing elements
};

MyQueue.prototype.push = function (x) {
  // Always push new elements onto stackIn
  this.stackIn.push(x);
};

MyQueue.prototype.pop = function () {
  // If stackOut is empty, transfer all elements from stackIn
  if (this.stackOut.length === 0) {
    while (this.stackIn.length > 0) {
      this.stackOut.push(this.stackIn.pop());
    }
  }
  // Pop from stackOut, which is now in FIFO order
  return this.stackOut.pop();
};

MyQueue.prototype.peek = function () {
  // Ensure stackOut has the oldest elements on top
  if (this.stackOut.length === 0) {
    while (this.stackIn.length > 0) {
      this.stackOut.push(this.stackIn.pop());
    }
  }

  //Return the front element of the queue
  return this.stackOut[this.stackOut.length - 1];
};
MyQueue.prototype.empty = function () {
  return this.stackIn.length === 0 && this.stackOut.length === 0;
};

var queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // Outputs 1
console.log(queue.pop());  // Outputs 1
console.log(queue.empty()); // Outputs false