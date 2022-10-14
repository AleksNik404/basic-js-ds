const { NotImplementedError } = require('../extensions/index.js');

const { testOptional, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  while (l.value === k) {
    l = l.next;
  }

  let first = l;
  let second = l.next;

  while (second) {
    if (second.value === k) {
      second = second.next;
      first.next = second;
    } else {
      first = first.next;
      second = second.next;
    }
  }

  return l;
}
// [1, 2, 3, 3, 4, 5]

module.exports = {
  removeKFromList,
};

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

const True = convertArrayToList([1, 2, 3, 3, 4, 5]);
const Fin = convertArrayToList([1, 2, 4, 5]);
console.log(removeKFromList(True, 3));
console.log(Fin);
// removeKFromList(True, 3);
