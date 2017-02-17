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

  get(endpoint, cb) {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => cb(null, data))
      .catch(err => cb(err, null));
  }

  componentDidMount() {
    this.get('/greetings', (err, data) => this.setState({ greetings: data }));
  }

  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

export default App;

