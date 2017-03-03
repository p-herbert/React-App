import React, { Component } from 'react';
import * as _ from 'lodash';
import Markup from './Markup';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '' };

    this.handleChange = _.debounce(this.handleChange, 500).bind(this);
  }

  componentDidMount() {
    this.setText('Able was I ere I saw Elba');
  }

  getText() {
    return this.state.text;
  }

  setText(str, cb) {
    this.setState({ text: str }, cb);
  }

  handleChange(event) {
    this.setText(event.target.value);
  }

  render() {
    return (
      <div>
        <div id="left" className="height-full">
          <h2>Editor</h2>
          <textarea
            className="editor"
            onChange={(e) => { e.persist(); this.handleChange(e); }}
          />
        </div>
        <div id="right" className="height-full">
          <h2>Palindromes</h2>
          <Markup text={this.state.text} />
        </div>
      </div>
    );
  }
}

export default App;

