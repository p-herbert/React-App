import React, { Component } from 'react';
import * as _ from 'lodash';

const h = require('app/assets/js/helpers');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '' };

    this.handleChange = _.debounce(this.handleChange, 500).bind(this);
  }

  componentDidMount() {
    this.setText('I was able ere I saw elba');
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
          <textarea
            className="editor"
            onChange={(e) => { e.persist(); this.handleChange(e); }}
          />
        </div>
        <div id="right" className="height-full">
          <div className="markup">
            {
              h.paragraphs(this.getText())
                .map((p) => {
                  return (
                    <p>
                      {
                        p.split(' ')
                          .filter(word => word !== '')
                          .map(word => (h.isPalindrome(word) ? <b>{`${word} `}</b> : `${word} `))
                      }
                    </p>
                  );
                })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

