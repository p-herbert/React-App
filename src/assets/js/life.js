class Life {
  constructor(n) {
    this._size = n;
    this._cells = [];
  }

  cells() {
    return this._cells;
  }

  index(row, col) {
    return (this.size() * row) + col;
  }

  get(row, col) {
    return this._cells[this.index(row, col)];
  }

  set(cells) {
    this._cells = cells;
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
    const next = [];
    let neighbors;
    let index;

    this.each((row, col) => {
      neighbors = this.neighbors(row, col);
      index = this.index(row, col);

      if (this.survives(neighbors)) {
        next[index] = 1;
      } else if (this.dies(neighbors)) {
        next[index] = 0;
      } else if (this.born(row, col, neighbors)) {
        next[index] = 1;
      }
    });

    this.set(next);
  }

  livingNeighbors(neighbors) {
    let alive = 0;

    neighbors.forEach((coord) => {
      if (this.get(coord[0], coord[1]) === 1) {
        alive += 1;
      }
    });

    return alive;
  }

  survives(row, col, neighbors) {
    const alive = this.livingNeighbors(neighbors);
    const cell = this.get(row, col);

    if (cell === 1 && (alive === 2 || alive === 3)) {
      return true;
    }

    return false;
  }

  dies(row, col, neighbors) {
    const alive = this.livingNeighbors(neighbors);
    const cell = this.get(row, col);

    if (cell === 1 && (alive < 2 || alive > 3)) {
      return true;
    }

    return false;
  }

  born(row, col, neighbors) {
    const alive = this.livingNeighbors(neighbors);
    const cell = this.get(row, col);

    if (cell === 0 && alive === 3) {
      return true;
    }

    return false;
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

