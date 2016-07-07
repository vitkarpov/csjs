class Node {
  constructor(value, left, right) {
    this._store = value;
    this.left = left;
    this.right = right;
  }

  valueOf() {
    return Number(this._store);
  }
}

class BST {
  constructor() {
    this._root = null;
  }

  insert(value) {
    const node = new Node(value, null, null);

    if (this._root === null) {
      return this._root = node, this;
    }

    let parent;
    let current = this._root;

    while (true) {
      parent = current;

      if (node - current < 0) {
        current = current.left;

        if (current === null) {
          parent.left = node;
          break;
        }

      } else {
        current = current.right;

        if (current === null) {
          parent.right = node;
          break;
        }
      }
    }
    return this;
  }

  _collectItemsInOrder(node, store) {
    if (node === null) {
      return store;
    }
    this._collectItemsInOrder(node.left, store);
    store.push(Number(node));
    this._collectItemsInOrder(node.right, store);
  }

  toString() {
    const result = [];

    return (
      this._collectItemsInOrder(this._root, result),
      result.join()
    );
  }
}

module.exports = BST;
