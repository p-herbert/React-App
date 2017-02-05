const express = require('express');
const bodyParser = require('body-parser');

// Create the Express application
const app = express();

// Add body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static assessts
app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile('client/index.html');
});

module.exports = app;

