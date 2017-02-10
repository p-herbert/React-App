import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// Attach App to DOM
render(<App size={25} />, document.getElementById('app'));

