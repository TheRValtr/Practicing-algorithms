/**
 * Stack (LIFO)
 * push, pop, peek, isEmpty, size
 *
 * All operations: O(1)
 */
class Stack {
  constructor() {
    this._arr = [];
  }

  push(x) {
    this._arr.push(x);
    return this.size();
  }

  pop() {
    if (this.isEmpty()) return undefined;
    return this._arr.pop();
  }

  peek() {
    return this._arr[this._arr.length - 1];
  }

  isEmpty() {
    return this._arr.length === 0;
  }

  size() {
    return this._arr.length;
  }
}

module.exports = { Stack };