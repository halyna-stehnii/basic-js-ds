const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.bstRoot = null;
  }

  root() {
    return this.bstRoot;
  }

  add(data) {
    const node = new Node(data);
    if (this.bstRoot === null) {
      this.bstRoot = node;
    } else {
      this.addNode(this.bstRoot, node);
    }
  }

  addNode(bstRoot, node) {
    if (node.data < this.bstRoot.data) {
      if (bstRoot.left === null) {
        bstRoot.left = node;
      } else {
        this.addNode(bstRoot.left, node);
      }
    } else {
      if (bstRoot.right === null) {
        bstRoot.right = node;
      } else {
        this.addNode(bstRoot.right, node);
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
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
  BinarySearchTree,
};
