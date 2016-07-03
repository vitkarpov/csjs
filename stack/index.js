class Stack {
  constructor() {
    this._store = [];
    this._top = 0;
  }

  push(item) {
    this._store[this._top++] = item;
    return this;
  }

  pop() {
    return this._store[--this._top];
  }

  peek() {
    return this._store[this._top - 1];
  }

  length() {
    return this._top;
  }

  clear() {
    this._top = 0;
  }

  toString() {
    return this._store.join();
  }
}

module.exports = Stack;
