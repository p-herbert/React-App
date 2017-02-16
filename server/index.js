const app = require('./server');
const db = require('db');
const Promise = require('bluebird');

const port = 8080;

db.sequelize.sync({ force: true })
  .then(() => console.log('Database starting...'))
  .then(() => app.listen(port, () => console.log('Server starting...')))
  .catch(err => console.log(err));

