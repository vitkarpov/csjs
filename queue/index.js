class Queue {
  constructor(comparator) {
    this._store = [];
    this._cmp = comparator || defaultComparator;
  }

  enqueue(item) {
    this._store.push(item);
    this._store.sort(this._cmp);
  }

  dequeue() {
    return this._store.pop();
  }

  front() {
    return this._store[this._store.length - 1];
  }

  back() {
    return this._store[0];
  }

  empty() {
    return this._store.length === 0;
  }
}

function defaultComparator(a, b) {
  return a > b;
}

module.exports = Queue;
