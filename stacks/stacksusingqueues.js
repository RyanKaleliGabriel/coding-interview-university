var MyStack = function () {
  this.queue1 = []; // Main queue to hold elements in stack order
  this.queue2 = []; // Helper queue for rearranging elements
};

MyStack.prototype.push = function (x) {
  // Push the new element into queue1
  this.queue1.push(x);
};

MyStack.prototype.pop = function () {
  // Move all elements except the last one from queue1 to queue2
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }

  // The last element in queue1 is the top of the stack
  const poppedValue = this.queue1.shift();

  // Swap queue1 and queue2, so queue1 is always the main queue
  let temp = this.queue1;
  this.queue1 = this.queue2;
  this.queue2 = temp;
  return poppedValue;
};

MyStack.prototype.top = function () {
  // Similar to pop, but we put the last element back into queue1
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }

  // Peek the last element in queue1, which is the top of the stack
  const topElement = this.queue1[0];

  // Move the last item back to queue1 and swap queues
  this.queue2.push(this.queue1.shift());

  let temp = this.queue1;
  this.queue1 = this.queue2;
  this.queue2 = temp;
  return topElement;
};

MyStack.prototype.empty = function () {
  // Check if queue1 is empty, which means the stack is empty
  return this.queue1.length === 0;
};

var obj = new MyStack();
console.log(obj.push(1));
console.log(obj.push(2));
console.log(obj.top());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.empty())
