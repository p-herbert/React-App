import React, { Component } from 'react';
import * as _ from 'lodash';
import Life from 'app/assets/js/life';
import Cell from './Cell';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: (100 / this.props.size),
      width: (100 / this.props.size),
      life: new Life(this.props.size),
      cells: [] };

    this.state.life.each((row, col) => {
      this.state.cells.push(this.mapper(row, col));
    });
  }

  componentDidMount() {
    let next;

    setInterval(() => {
      next = [];
      this.state.life.tick();

      this.state.life.each((row, col) => next.push(this.mapper(row, col)));

      this.setState({
        cells: next });
    }, 1000);
  }

  mapper(row, col) {
    return {
      x: row * this.state.height,
      y: col * this.state.width,
      key: this.state.life.index(row, col),
      status: this.state.life.get(row, col) === 1 ? 'alive' : 'dead' };
  }

  render() {
    return (
      <svg className="board" viewBox="0 0 100 100" >
        {
          this.state.cells.map(cell =>
            <Cell
              status={cell.status}
              x={cell.x}
              y={cell.y}
              height={this.state.height}
              width={this.state.width}
              key={cell.key}
            />
          )
        }
      </svg>
    );
  }
}

App.propTypes = {
  size: React.PropTypes.number.isRequired };

export default App;

