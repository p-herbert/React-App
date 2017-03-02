import React, { Component } from 'react';
import * as _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '' };

    this.handleChange = _.debounce(this.handleChange, 500).bind(this);
  }

  getText() {
    return this.state.text;
  }

  setText(str, cb) {
    this.setState({ text: str }, cb);
  }

  handleChange(event) {
    this.setText(event.target.value, () => console.log(this.getText()));
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div id="left" className="height-full">
          <textarea
            className="editor"
            onChange={(e) => { e.persist(); this.handleChange(e); }}
          />
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

