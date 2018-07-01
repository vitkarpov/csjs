class Queue {
  constructor(comparator = defaultComparator) {
    this._store = [];
    this._cmp = (i, j) => comparator(this._store[i], this._store[j]);
  }

  push(item) {
    this._store.push(item);
    this._up(this._store.length - 1);
  }

  pop() {
    this._swap(0, this._store.length - 1);
    this._down(0, this._store.length - 1);
    return this._store.pop();
  }

  _up(current) {
    while (true) {
      const parent = ((current + 1) >> 1) - 1;

      if (parent < 0 || parent === current || this._cmp(parent, current)) {
        break;
      }

      this._swap(parent, current);
      current = parent;
    }
  }

  _down(current, n) {
    while (true) {
      let left = 2 * current + 1;
      let right = 2 * current + 2;
      
      if (left >= n) {
        break;
      }

      if (right < n && this._cmp(right, left)) {
        left = right;
      }

      if (this._cmp(current, left)) {
        break;
      }

      this._swap(current, left);
      current = left;
    }
  }

  _swap(i, j) {
    [this._store[i], this._store[j]] = [this._store[j], this._store[i]];
  }

  peek() {
    return this._store[0];
  }

  size() {
    return this._store.length;
  }
}

function defaultComparator(a, b) {
  return a > b;
}

module.exports = Queue;
