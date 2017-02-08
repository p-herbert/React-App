class Life {
  constructor(n) {
    this._size = n;
    this._cells = [];
  }

  cells() {
    return this._cells;
  }

  get(row, col) {
    return this._cells[(this.size() * row) + col];
  }

  size() {
    return this._size;
  }

  neighbors(row, col) {
  }

  tick() {
  }

  survives(row, col) {
  }

  dies(row, col) {
  }

  born(row, col) {
  }

  each(cb) {
    for (let row = 0; row < this.size(); row++) {
      for (let col = 0; col < this.size(); col++) {
        cb(row, col);
      }
    }
  }
}

module.exports = Life;

