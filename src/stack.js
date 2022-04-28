const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.elems = [];
    this.sum = 0;
  }


  push(element) {
    this.elems[this.sum] = element;
    this.sum += 1;
    return this.sum - 1;
  }

  pop() {
    if (this.sum === 0) {
      return undefined;
    } else {
      let deleteElem = this.elems[this.sum - 1]; //?
      this.sum -= 1;
      return deleteElem;
    }
  }

  peek() {
    return this.elems[this.sum - 1];
  }
}


module.exports = {
  Stack
};
