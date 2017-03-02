import React, { Component } from 'react';
import * as _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div id="left" className="height-full">
          <textarea className="editor" />
        </div>
        <div id="right" className="height-full">
          <div className="markup">
            <p>I was able ere I saw elba</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

