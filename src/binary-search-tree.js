const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.roott = null;
  }

  root() {
    return this.roott;
  }

  add(data) {
    if (!this.roott) {
      this.roott = new Node(data);
      return;
    }

    let curNode = this.roott;

    while (true) {
      if (data < curNode.data) {
        if (!curNode.left) {
          curNode.left = new Node(data);
          return;
        }
        curNode = curNode.left;
      } else {
        if (!curNode.right) {
          curNode.right = new Node(data);
          return;
        }
        curNode = curNode.right;
      }
    }
  }

  has(data) {
    if (!this.roott) return false;

    let curNode = this.roott;

    while (curNode) {
      if (curNode.data === data) return true;
      if (curNode.data < data) curNode = curNode.right;
      else curNode = curNode.left;
    }
    return false;
  }

  find(data) {
    if (!this.roott) return null;

    let curNode = this.roott;

    while (curNode) {
      if (curNode.data === data) return curNode;
      if (curNode.data < data) curNode = curNode.right;
      else curNode = curNode.left;
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.roott) return null;

    let curNode = this.roott;

    while (curNode) {
      if (curNode.left) curNode = curNode.left;
      else return curNode.data;
    }
  }

  max() {
    if (!this.roott) return null;

    let curNode = this.roott;

    while (curNode) {
      if (curNode.right) curNode = curNode.right;
      else return curNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree,
};

const tree = new BinarySearchTree();
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);
// console.log(tree.find(32)); //, null);
console.log(tree.find(1337)); //, null);
// console.log(tree.find(42)); //, null);

// assert.strictEqual(tree.find(33), null);
// assert.strictEqual(tree.find(1337), null);
// assert.strictEqual(tree.find(42), null);

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// // tree.add(54);
// tree.add(2);
// // tree.add(6);
// // tree.add(8);
// // tree.add(31);
// // tree.add(1);
// console.log(tree);

// // console.log(tree.has(8));
