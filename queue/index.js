class Queue {
  constructor() {
    this._store = {};
  }

  enqueue(item, priority = 0) {
    if (!this._store[priority]) {
        this._store[priority] = [];
    }
    this._store[priority].push(item);

    return this;
  }

  dequeue() {
    const priorities = Object.keys(this._store).sort((a, b) => {
        return a >= b;
    });
    let highest = priorities.pop();

    while (highest) {
        if (this._store[highest].length) {
            return this._store[highest].shift();
        }
        highest = priorities.pop();
    }
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

module.exports = Queue;
