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
    if (node.data < bstRoot.data) {
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

  has(data) {
    return this.hasNode(this.bstRoot, data);
  }

  hasNode(node, data) {
    if (node === null) {
      return false;
    }
    if (node.data === data) {
      console.debug(node.data);
      return true;
    }
    if (data < node.data) {
      console.debug(node.data);
      return this.hasNode(node.left, data);
    } else {
      console.debug(node.data);
      return this.hasNode(node.right, data);
    }
  }

  find(data) {
    return this.findNode(this.bstRoot, data);
  }

  findNode(node, data) {
    if (node === null) {
      return null;
    }
    if (node.data === data) {
      return node;
    }
    if (data < node.data) {
      return this.findNode(node.left, data);
    } else {
      return this.findNode(node.right, data);
    }
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
