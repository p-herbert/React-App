import React, { Component } from 'react';
import * as _ from 'lodash';
import 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greetings: [] };

    this.get = this.get.bind(this);
  }

  componentDidMount() {
    this.get('/greetings', (err, data) => this.setState({ greetings: data }));
  }

  get(endpoint, cb) {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => cb(null, data))
      .catch(err => cb(err, null));
  }

  render() {
    return (
      <div>
        {
          this.state.greetings
            .map((lang, index) => <h1 key={index}>{ lang.greeting }</h1>)
        }
      </div>
    );
  }
}

export default App;

