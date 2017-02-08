class game {
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
  }
}

module.exports = game;

