class Queue {
  constructor() {
    this._store = [];
  }

  enqueue(item, priority = 0) {
    this._store.push({ item, priority });

    return this;
  }

  dequeue() {
    const highest = this._store.reduce((memo, item, index) => {
        if (item.priority < memo.priority) {
            memo.priority = item.priority;
            memo.index = index;
        }
        return memo;
    }, { priority: 99, index: -1 });

    return (this._store.splice(highest.index, 1)[0] || {}).item;
  }

  front() {
    return this._store[0].item;
  }

  back() {
    return this._store[this._store.length - 1].item;
  }

  empty() {
    return this._store.length === 0;
  }

  toString() {
    return this._stack.join();
  }
}

module.exports = Queue;
