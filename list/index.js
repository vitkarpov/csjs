class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this._head = new Node();
  }

  find(value) {
    return this.findPrevious(value).next;
  }

  findPrevious(value) {
    let current = this._head;

    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }
    return current;
  }

  insert(value, current) {
    const newNode = new Node(value);
    const currentNode = (current) ? this.find(current) : this._head;

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  remove(value) {
    const prev = this.findPrevious(value);

    prev.next = prev.next.next;
  }

  toString() {
    const result = [];
    let current = this._head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result.join();
  }
}

module.exports = List;
