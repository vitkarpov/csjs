class HashTable {
  constructor() {
    this._store = {};
  }

  put(key) {
    const pos = this._hash(key);

    this._store[pos] = this._store[pos] || [];
    this._store[pos].push(key);

    return this;
  }

  get(key) {
    const pos = this._hash(key);

    if (!this._store[pos]) {
      return null;
    }
    return this._store[pos].find(item => item === key);
  }

  _hash(key) {
    return key.split('').reduce((memo, item) => {
      return memo + (37 * memo + item.charCodeAt(item));
    }, 0) % 137;
  }

  toString() {
    return Object.keys(this._store).map((pos) => {
      return `${pos} : ${this._store[pos].join()}`;
    }).join(' | ');
  }
}

module.exports = HashTable;
