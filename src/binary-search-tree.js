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

  // remove(data) {
  //   if (!this.roott) return false;

  //   let parNode = null;
  //   let curNode = this.roott;

  //   while (curNode) {
  //     if (curNode.data > data) {
  //       parNode = curNode;
  //       curNode = curNode.left;
  //     } else if (curNode.data < data) {
  //       parNode = curNode;
  //       curNode = curNode.right;
  //     } else if (curNode.data === data) {
  //       // 1
  //       if (curNode.right === null) {
  //         if (parNode === null) this.roott = curNode.left;
  //       } else {
  //         if (curNode.data < parNode.data) parNode.left = curNode.left;
  //         else if (curNode.data > parNode.data) parNode.right = curNode.right;
  //       }
  //     }
  //     //2
  //     else if (curNode.right.left === null) {
  //       if (parNode === null) this.roott = curNode.left;
  //       else {
  //         curNode.right.left = curNode.left;
  //       }
  //     }
  //   }
  // }

  remove(data) {
    if (!this.roott) return false;

    let curNode = this.roott;
    let parNode = null;

    while (curNode) {
      // Поиск нужного узла
      if (data < curNode.data) {
        parNode = curNode;
        curNode = curNode.left;
      }
      if (data > curNode.data) {
        parNode = curNode;
        curNode = curNode.right;
      }
      if (curNode.data === data) {
        // Если нашли узел с нужными данными
        // Работаем по правой стороне
        //
        // Когда нет правого дочернего нода
        if (curNode.right === null) {
          if (parNode === null) this.roott = curNode.left;
          else {
            // Если данные меньше чем у родителя, то присоединяем к левой стороне родителя
            if (curNode.data < parNode.data) parNode.left = curNode.left;
            // Если данные больше чем у родителя, то присоединяем к правой стороне родителя
            if (curNode.data > parNode.data) parNode.right = curNode.left;
          }
        } // Когда есть правый нод. У которого нет меньшего левого нода.
        else if (curNode.right.left === null) {
          curNode.right.left = curNode.left;
          if (parNode === null) this.roott = curNode.right;
          else {
            // Если данные меньше чем у родителя, то присоединяем к левой стороне родителя
            if (curNode.data < parNode.data) parNode.left = curNode.right;
            // Если данные больше чем у родителя, то присоединяем к правой стороне родителя
            if (curNode.data > parNode.data) parNode.right = curNode.right;
          }
        }
        // Когда есть правый нод. У которого также есть левый нод.
        else {
          // У правого нода удаляемого элемента, ищем наименьший элемент по левой стороне
          let leftLessNode = curNode.right.left;
          let leftLessNodeParent = curNode.right;
          while (leftLessNode.left !== null) {
            leftLessNodeParent = leftLessNode;
            leftLessNode = leftLessNode.left;
          }

          // Левое поддерево делаем правым поддеревом
          // Наименьшему левому ноду правой стороны удаляемого элемента, назначаем элементы левой стороны удаляемого элемента.
          leftLessNodeParent.left = leftLessNode.right;
          leftLessNode.left = curNode.left;
          leftLessNode.right = curNode.right;

          if (parNode === null) this.roott = leftLessNode;
          // Делаем связь от родителя удаляемого элемента, к наименьшему ноду правой стороны, с них сбросился указатель.
          else {
            if (curNode.data < parNode.data) parNode.left = leftLessNode;
            if (curNode.data > parNode.data) parNode.right = leftLessNode;
          }
        }
        return true;
      }
    }
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
