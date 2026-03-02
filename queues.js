
class Queue {
  constructor() {
    this._arr = [];
    this._head = 0;
  }

  enqueue(x) {
    this._arr.push(x);
    return this.size();
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const value = this._arr[this._head];
    this._head += 1;

    // optional compaction to avoid unbounded growth
    if (this._head > 50 && this._head * 2 > this._arr.length) {
      this._arr = this._arr.slice(this._head);
      this._head = 0;
    }

    return value;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this._arr[this._head];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this._arr.length - this._head;
  }
}

module.exports = { Queue };