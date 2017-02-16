const express = require('express');
const bodyParser = require('body-parser');
const router = require('db/routers/greetRouter');

// Create the Express application
const app = express();

// Add body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add router(s)
app.use(router);

// Static assessts
app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile('client/index.html');
});

module.exports = app;

