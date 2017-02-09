import React, { Component } from 'react';
import * as _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <svg className="board" viewBox="0 0 100 100" />
    );
  }
}

export default App;

