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

    const minRow = Math.max(0, row - 1);
    const maxRow = Math.min(this.size() - 1, row + 1) + 1;

    const minCol = Math.max(0, col - 1);
    const maxCol = Math.min(this.size() - 1, col + 1) + 1;

    for (let r = minRow; r < maxRow; r++) {
      for (let c = minCol; c < maxCol; c++) {
        if (!(row === r && col === c)) {
          neighborhood.push([r, c]);
        }
      }
    }

    return neighborhood;
  }

  tick() {
  }

  survives(neighbors) {
    let alive = 0;

    neighbors.forEach((coord) => {
      if (this.get(coord[0], coord[1]) === 1) {
        alive += 1;
      }
    });

    if (alive === 2 || alive === 3) {
      return true;
    }

    return false;
  }

  dies(neighbors) {
    let alive = 0;

    neighbors.forEach((coord) => {
      if (this.get(coord[0], coord[1]) === 1) {
        alive += 1;
      }
    });

    if (alive < 2 || alive > 3) {
      return true;
    }

    return false;
  }

  born(row, col) {
  }

  each(cb) {
    const size = this.size();

    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        cb(row, col);
      }
    }
  }
}

module.exports = Life;

