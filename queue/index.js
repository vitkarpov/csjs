class Queue {
  constructor() {
    this._store = [];
  }

  enqueue(item) {
    this._store.push(item);
    return this;
  }

  dequeue() {
    return this._store.shift();
  }

  front() {
    return this._store[0];
  }

  back() {
    return this._store[this._store.length - 1];
  }

  empty() {
    return Boolean(this._store.length);
  }

  toString() {
    return this._stack.join();
  }
}
