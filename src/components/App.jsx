import React, { Component } from 'react';
import * as _ from 'lodash';
import Markup from './Markup';
import Editor from './Editor';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };

    this.handleChange = this.handleChange.bind(this);
    this.setText = _.debounce(this.setText, 500).bind(this);
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
    event.persist();

    this.setText(event.target.value);
  }

  render() {
    return (
      <div>
        <div id="left" className="height-full">
          <h2>Editor</h2>
          <Editor change={this.handleChange} holder={'Type here...'} />
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

