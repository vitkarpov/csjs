class Queue {
  constructor(comparator) {
    this._store = [];
    this._cmp = comparator || defaultComparator;
  }

  push(item) {
    this._store.push(item);
    this._store.sort(this._cmp);
  }

  pop() {
    return this._store.pop();
  }

  peak() {
    return this._store[this._store.length - 1];
  }

  empty() {
    return this._store.length === 0;
  }
}

function defaultComparator(a, b) {
  return a > b;
}

module.exports = Queue;
