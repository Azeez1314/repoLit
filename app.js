/** Task:
Implement a Queue class using two stacks.


Answer:
*/

class Stack {
    constructor() {
      this.data = [];
    }
  
    push(record) {
      this.data.push(record);
    }
  
    pop() {
      return this.data.pop();
    }
  
    peek() {
      return this.data[this.data.length - 1];
    }
  }
  
  class Queue {
    constructor() {
      this.first = new Stack();
      this.second = new Stack();
    }
  
    enqueue(record) {
      this.first.push(record);
    }
  
    dequeue() {
      while (this.first.peek()) {
        this.second.push(this.first.pop());
      }
  
      const record = this.second.pop();
  
      while (this.second.peek()) {
        this.first.push(this.second.pop());
      }
  
      return record;
    }
  
    peek() {
      while (this.first.peek()) {
        this.second.push(this.first.pop());
      }
  
      const record = this.second.peek();
  
      while (this.second.peek()) {
        this.first.push(this.second.pop());
      }
  
      return record;
    }
  }
  
  
  
  
  const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    console.log(queue.peek(), 1);
    console.log(queue.dequeue(), 1);
    console.log(queue.dequeue(), 2);
    console.log(queue.dequeue(), 3);
    console.log(queue.dequeue(), undefined); 