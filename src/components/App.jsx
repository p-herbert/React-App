import React, { Component } from 'react';
import * as _ from 'lodash';
import Cell from './Cell';
import Life from 'App/assets/js/Life';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <svg className="board" viewBox="0 0 100 100" >
        <Cell />
      </svg>
    );
  }
}

export default App;

