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
    const neighborhood = [];

    for (let r = Math.max(0, row - 1); r <= Math.min(this.size() - 1, row + 1); r++) {
      for (let c = Math.max(0, col - 1); c <= Math.min(this.size() - 1, col + 1); c++) {
        if (!(row === r && col === c)) {
          neighborhood.push([r, c]);
        }
      }
    }

    return neighborhood;
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

