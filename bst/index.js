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

  find(value) {
    let current = this._root;
    let delta = current - value;

    while (delta !== 0) {
        if (delta < 0) {
            current = current.right;
        } else {
            current = current.left;
        }
        if (current === null) {
            return null;
        }
        delta = current - value;
    }
    return current;
  }

  getMin() {
    let current = this._root;

    while (current.left !== null) {
      current = current.left;
    }
    return Number(current);
  }

  getMax() {
    let current = this._root;

    while (current.right !== null) {
      current = current.right;
    }
    return Number(current);
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
