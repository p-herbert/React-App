const app = require('./server');
const db = require('db');
const data = require('db/data/greetings');
const Promise = require('bluebird');

const port = 8080;

db.sequelize.sync({ force: true })
  .then(() => {
    console.log('Database starting...');

    db.Greet
      .bulkCreate(data)
      .then(() => console.log('SUCCESS: Data Inserted'))
      .then(() => app.listen(port, () => console.log('Server starting...')))
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

