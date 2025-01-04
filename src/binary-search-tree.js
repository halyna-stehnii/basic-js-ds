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

  remove(data) {
    this.bstRoot = this.removeNode(this.bstRoot, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      // Case 1: No children
      if (node.left === null && node.right === null) {
        return null;
      }
      // Case 2: One child
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      // Case 3: Two children
      let minNode = this.findMin(node.right);
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data);
      return node;
    }
  }

  min() {
    const node = this.findMin(this.bstRoot);
    return node ? node.data : null;
  }

  findMin(node) {
    if (node === null) {
      return null;
    }
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  max() {
    const node = this.findMax(this.bstRoot);
    return node ? node.data : null;
  }

  findMax(node) {
    if (node === null) {
      return null;
    }
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }
}

module.exports = {
  BinarySearchTree,
};
