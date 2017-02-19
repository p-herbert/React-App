const db = require('db');
const Promise = require('bluebird');

function getAllGreetings(req, res) {
  db.Greet
    .findAll({})
    .then(greetings => res.send(greetings))
    .catch(err => res.status(500).send(err));
}

module.exports = {
  getAll: getAllGreetings };

