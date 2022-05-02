const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.roots = null;
  }

  root() {
    return this.roots;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.roots) {
      this.roots = newNode;
      return;
    }

    let current = this.roots;

    while (current) {
      if (newNode.data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }

        current = current.right;
      }
    }
  }

  has(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    let current = this.roots;

    while (current) {
      if (current.data === data) {
        return current;
      }
      if (data < current.data) {
        if (current.left) {
          current = current.left;
        } else {
          return null;
        }
      }
      if (data > current.data) {
        if (current.right) {
          current = current.right;
        } else {
          return null;
        }
      }
    }
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};